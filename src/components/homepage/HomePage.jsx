import React from "react";
import IntroSection from "./components/IntroSection/IntroSection";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import CaseStudySection from "./components/CaseStudySection/CaseStudySection";
import PartnerSection from "./components/PartnerSection/PartnerSection";
import NewAndInsightsSection from "./components/NewAndInsightsSection/NewAndInsightsSection";
import ContactSection from "./components/ContactSection/ContactSection";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { EffectFade, Mousewheel } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/mousewheel";
import { useEffect, useRef, useState } from "react";
import SectionNavButtons from "../ui/Buttons/SectionNavButtons/SectionNavButtons";
import { useBoundStore } from "@/store/useBoundStore";

const HomePage = (allPosts) => {
  const [isShowSectionSlide, setIsShowSectionSlide] = useState(true);
  const swiperRef = useRef(null);
  const setToDark = useBoundStore((state) => state.setToDark);
  const setToLight = useBoundStore((state) => state.setToLight);
  const hideHeaderBtn = useBoundStore((state) => state.hideHeaderBtn);
  const showHeaderBtn = useBoundStore((state) => state.showHeaderBtn);
  const expanseMenuIsOpen = useBoundStore((state) => state.expanseMenuIsOpen);
  const setHeaderCanNotChangeColor = useBoundStore(
    (state) => state.setHeaderCanNotChangeColor
  );
  const setHeaderCanChangeColor = useBoundStore(
    (state) => state.setHeaderCanChangeColor
  );
  const setBottomNavIsShown = useBoundStore(
    (state) => state.setBottomNavIsShown
  );
  const contactFormRef = useRef(null);
  const setHeaderStickyState = useBoundStore(
    (state) => state.setHeaderStickyState
  );

  //Lướt tới contact form
  const scrollToContactForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setHeaderCanChangeColor();
    setToLight();
  };

  //Lướt lên slider
  const scrollToSlider = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setHeaderCanChangeColor();
    setToDark();
  };

  //Set header sang màu sáng, set fixed header
  useEffect(() => {
    setHeaderCanChangeColor();
    setToLight();
    setHeaderStickyState(true);
  }, []);

  useEffect(() => {
    const swiperElement = swiperRef.current;
    const swiperObj = swiperElement.swiper;
    if (!swiperObj) return;
    //Khóa slider khi đã mở menu
    if (expanseMenuIsOpen) {
      swiperObj.allowSlideNext = false;
      swiperObj.allowSlidePrev = false;
    } else {
      swiperObj.allowSlideNext = true;
      swiperObj.allowSlidePrev = true;
    }
  }, [expanseMenuIsOpen]);

  useEffect(() => {
    //Khi ở màn hình mobile, hiển thị dưới dạng thông thường
    const handleResize = () => {
      const isOnMobile = window.innerWidth < 1280;
      setIsShowSectionSlide(!isOnMobile);
      if (isOnMobile) {
        setHeaderCanChangeColor();
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //Khi refresh, tự động lướt lên đầu trang
  // useEffect(() => {
  //   window.history.scrollRestoration = "manual";
  // }, []);

  //Handle sự kiện lăn chuột
  useEffect(() => {
    if (!isShowSectionSlide) return; //Bỏ qua nếu không ở màn hình desktop
    const handleScrollWheel = (event) => {
      //Biến xác định đang lướt lên hay xuống
      const wheelDirection = event.deltaY > 0 ? "down" : "up";

      const swiperElement = swiperRef.current;
      const swiperObj = swiperElement.swiper;

      if (!swiperObj) return;
      if (swiperObj.enabled) {
        setHeaderCanNotChangeColor();
      } else {
        setHeaderCanChangeColor();
      }

      const elementTop = swiperElement.getBoundingClientRect().top;

      if (swiperObj.activeIndex !== 4 && swiperObj.activeIndex !== 0) {
        window.scrollTo({ top: 0, behavior: "instant" });
        return;
      }

      //Set header về dark, vô hiệu slider khi ở slide cuối cùng
      if (
        elementTop === 0 &&
        swiperObj.isEnd &&
        swiperObj.activeIndex === 4 &&
        wheelDirection === "down"
      ) {
        swiperObj.enabled = false;
        setToDark();
        return;
      }

      if (elementTop === 0 && swiperObj.isEnd && wheelDirection === "up") {
        swiperObj.enabled = true;
        return;
      }
    };

    window.addEventListener("wheel", handleScrollWheel);

    return () => {
      window.removeEventListener("wheel", handleScrollWheel);
    };
  }, [expanseMenuIsOpen]);

  //Chuyển slide tiếp theo
  const nextSlideHandler = () => {
    swiperRef.current.swiper.slideNext();
  };

  //Sự kiện khi chuyển slide
  const handleSlideChange = (swiper) => {
    const header = document.querySelector(".main-header-g");
    if (swiper.isEnd) {
      setHeaderCanChangeColor();
      setToDark();
    }
    if (swiper.activeIndex === 3) {
      setToLight();
    }
    if (swiper.isEnd) {
      setBottomNavIsShown(false);
    } else {
      setBottomNavIsShown(true);
    }
    if (swiper.activeIndex === 0) {
      setHeaderCanChangeColor();
      setToLight();
      if (isShowSectionSlide) {
        showHeaderBtn();
      }
    } else if (isShowSectionSlide) {
      hideHeaderBtn();
    }
    if (swiper.activeIndex > 0 && swiper.activeIndex <= 3) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }
  };

  return (
    <>
      <style>
        {`
        ::-webkit-scrollbar {
          width: 0;
          height: 0;
        }
        `}
      </style>
      {isShowSectionSlide && (
        <Swiper
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          ref={swiperRef}
          modules={[EffectFade, Mousewheel]}
          direction={"vertical"}
          effect="fade"
          allowTouchMove={false}
          className="section-swiper"
          mousewheel={true}
          speed={1500}
        >
          <SwiperSlide>
            <IntroSection />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceSection
              NavButton={
                <SectionNavButtons
                  color="black"
                  isDown
                  onClick={nextSlideHandler}
                />
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <PartnerSection
              NavButton={
                <SectionNavButtons
                  color="white"
                  isDown
                  onClick={nextSlideHandler}
                />
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <CaseStudySection
              NavButton={
                <SectionNavButtons
                  color="white"
                  isDown
                  onClick={nextSlideHandler}
                />
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewAndInsightsSection
              data={allPosts}
              NavButton={
                <SectionNavButtons
                  color="black"
                  isDown
                  onClick={scrollToContactForm}
                />
              }
            />
          </SwiperSlide>
        </Swiper>
      )}
      {!isShowSectionSlide && swiperRef.current.swiper && (
        <>
          <IntroSection />
          <ServiceSection />
          <PartnerSection />
          <CaseStudySection />
          <NewAndInsightsSection data={allPosts} />
        </>
      )}
      <ContactSection
        ref={contactFormRef}
        NavButton={
          <SectionNavButtons
            color="white"
            isUp
            onClick={scrollToSlider}
            noLeftButton
          />
        }
      />
    </>
  );
};
export default HomePage;
