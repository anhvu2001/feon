import classes from "./CaseStudy.module.scss";
import CaseStudiesFilters from "../CaseStudiesFilters/CaseStudiesFilters";
import CaseStudyList from "./CaseStudyList";
import CustomPagination from "@/components/ui/Pagination/CustomPagination";
import ButtonNoBorder from "@/components/ui/Buttons/ButtonNoBorder/ButtonNoBorder";
import TopRightArrow from "@/components/ui/Icons/TopRightArrow";

const DUMMY_CASE_STUDIES = [
  {
    id: 1,
    name: "kundal",
    year: 2020,
    image:
      "https://s3-alpha-sig.figma.com/img/76c7/d54a/6992bc58548933b5d3e7359e00ed0211?Expires=1699833600&Signature=Im-8OcRyX~HJpKjBYKYYlg84Z1nqP-aBz1CMMUcJsFHuZuK4Get6L75vmO72HI5W2cWmJ2NuVauv-R2sCdAzb1q8ew4idM9Rofe5vKw4eTOZf~Yp45tnuxNGj9be4RVTZHq9cVqrB3AyCFwlfk9iEbwKwZ-GTdzwHlsQs7Ya8w8o01tNNLx4R4HqTV6J2F7svWeYMJ1Y6nkwNt1O9rEI6~hjD-A8oOWv1jFAzUcdwGBlZeNER01ZOeuZO4~SHsCG2H0JVs6~fYVdtu9KK28vCo-jN3N2RGVGiY4jWJSpTgrFrg6SQVcOBBZTahBz9UmtTgZPkGRKJ-jtQY7AR8BFbg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tags: [
      {
        name: "Content Marketing",
        type: 1,
      },
      {
        name: "Facebook Ads",
        type: 2,
      },
      {
        name: "Graphic Design",
        type: 3,
      },
      {
        name: "KOL Marketing",
        type: 4,
      },
      {
        name: "Video Marketing",
        type: 2,
      },
    ],
  },
  {
    id: 2,
    name: "renault",
    year: 2020,
    image:
      "https://s3-alpha-sig.figma.com/img/ae37/520f/d7dd53b1c29e09ee970ca9005d3b9f9e?Expires=1699833600&Signature=DnJ~kSn9VPoE5MTj4-etZFmffK~kd5vD3pjhu8OLHyteKj4z53QPIS7PSxlAPOylvxBIqVipfJ5U3Okx02No9KlyJIytZkVITUNQPUDxFEyOuU-IF5Mfsl8JwZRyAfkRhd3FinOphk-yufc3ITGKDp3REsmTMCMLe-wiveE5UihoojanbOxPqjnlPWE~I9nXI8RiFEPPdvx-hNPQZ-K36f3Mp1~4zVwqYZmO27lWehff0AbOiAkrdLhC50h7iNKUuFxqtzgcvNcnxEzIfpyJjvOv9DU1dL-vwSTIdKGyYORwhYJYWvTuYOgQxwnv~ljdGtE-eWZZ6WWOgU8FFp7I5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tags: [
      {
        name: "Content Marketing",
        type: 1,
      },
      {
        name: "Facebook Ads",
        type: 2,
      },
      {
        name: "Graphic Design",
        type: 3,
      },
      {
        name: "KOL Marketing",
        type: 4,
      },
      {
        name: "Video Marketing",
        type: 2,
      },
    ],
  },
  {
    id: 3,
    name: "kim long diep",
    image:
      "https://s3-alpha-sig.figma.com/img/c3bb/c838/e8b8f46efb39a659d70a636c9c3d4584?Expires=1699833600&Signature=I8krnkKehL67U5idH4WR7qjKdjg9CSLDvvPhnU8sRcFx5InZmo7a7-kvg~XaLmVi6z1ive78XE~vnd1I~S4MxbpefKPNEIgmYu3LBnVmUV4Z6rFfRDO9~jlwDrsw5474fHKK0y0J-ud3gqmAtZ4WI1mmHTf3biSDne0uoo79F3E6O03-yZCQ-Ykz6krHO2CgHdQYJOACzGcF0Ev5glr9497Pb8s2ItgQscuPWemo5bgATkF4B~ySJivn4BuabBgAU17ofNoJUfjdIyrdmrstE2F6zUClorgtKD~HYxzxblxiuV822IVQvMGCFAaYTAh3MmGI1MK88uO9NfOIzVWqHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    year: 2020,
    tags: [
      {
        name: "Content Marketing",
        type: 1,
      },
      {
        name: "Facebook Ads",
        type: 2,
      },
      {
        name: "Graphic Design",
        type: 3,
      },
      {
        name: "KOL Marketing",
        type: 4,
      },
      {
        name: "Video Marketing",
        type: 2,
      },
    ],
  },
  {
    id: 4,
    name: "ducati",
    image:
      "https://s3-alpha-sig.figma.com/img/ea73/39e1/d0ae8df3725ce6b9ac91e2eebb47760a?Expires=1699833600&Signature=Cmu5RZ740SeQ8X1bxJF4Doi~rEbmQXTpy3cfcVMdpfbuDxfg8u1vCozeLWU6tqoFq0MSb6m0ORmoscfwV4jBlqxI~ltluV-mGaMjbLdIUHqft4~7zTlamehIImPqiJW3ObFylS8VHESGBStVu4QD41tq3D9OWWCKGbbSIwKNXkb916rfh5CCEWoD6PkHZvdIT8RHDW7RWPBxpVjux1IFedxKA-NHTv9CAO5oCYAS0WFWsrKXvCcODHQUaMQq1NiyO5h4o3UsZAQLRL7TL3dtyYR-c8IhWTTmsPDeaerPELsD1~OMYStssFaKH8M1emIRcxbnvPLAkBIXCMGxAZ3SeA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    year: 2020,
    tags: [
      {
        name: "Content Marketing",
        type: 1,
      },
      {
        name: "Facebook Ads",
        type: 2,
      },
      {
        name: "Graphic Design",
        type: 3,
      },
      {
        name: "KOL Marketing",
        type: 4,
      },
      {
        name: "Video Marketing",
        type: 2,
      },
    ],
  },
  {
    id: 5,
    name: "passion",
    image:
      "https://s3-alpha-sig.figma.com/img/302f/4cbf/7348a358d2fe9c6b872189bb36b7c98a?Expires=1696809600&Signature=T1e2BK4fT3xcz4tdNnE2RYN3g~hweRK5qN-Ewd6A5Ufy8ygQ0dTw1QVYcuBVrzRIg2FyUtMEMcTmdl6mG~uYGmQJSq2XAF619AD6y84IOjLc2FDbCmn-rTGPxoN0jJvfEBY~Kh5dr4WLwqUuFQxQTDy3JcI1gWgswxsMAwa6rx0UZdt-KZOeAxRmxaQwO7pj5NPDEbTYwlOnUiQfvyM6J5xLuvNLP5hsStclPLjqTmc-cENEZ2lmYxpQcLjVpXHoucg1xKrGXMvRvDvdArpH~IgOYGZfsSlLz~XwgUM0PiAfAyVVxa8z6ugMHhxzfJ7mnAbEt9vlQRcVUf~70xbA7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    year: 2020,
    tags: [
      {
        name: "Content Marketing",
        type: 1,
      },
      {
        name: "Facebook Ads",
        type: 2,
      },
      {
        name: "Graphic Design",
        type: 3,
      },
      {
        name: "KOL Marketing",
        type: 4,
      },
      {
        name: "Video Marketing",
        type: 2,
      },
    ],
  },
  {
    id: 6,
    name: "korice",
    image:
      "https://s3-alpha-sig.figma.com/img/c6b7/4e73/bab2bc2fb354cd389b25661f9ab42e53?Expires=1697414400&Signature=S3ELzFE3JPlffJ6cOeZ~mhEhJSEIPBy2FJ0iJykdtn997Y8qs3Izz0InmLACk1zsFGD2ZoF9qQHV2OxXRA0Vsqodd3QH3jLcvU354~z9RmNdRhoaX1aR3Aa6Y4bNkE0E2prIiN~-FwynX8EFp5w3bGYEGFXo8Ct~7GT674bTlbxilTkc6RKD2XzXmRgdS5CawNkvd8SlT2tO2U9ch5~hpri846KuQ8TSEugF1gkuCTGC-t4qKg7CH7GJ5Ja3wy0oEvsmxfrp7WndV4R7rvKaEviaV28Tz-nDaB7Nqs6guBoqjO10ps8qshy8GyzYhcaZj5PKgHPWfOTA~J9dCoGuZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    year: 2020,
    tags: [
      {
        name: "Content Marketing",
        type: 1,
      },
      {
        name: "Facebook Ads",
        type: 2,
      },
      {
        name: "Graphic Design",
        type: 3,
      },
      {
        name: "KOL Marketing",
        type: 4,
      },
      {
        name: "Video Marketing",
        type: 2,
      },
    ],
  },
];

export default function CaseStudyServicePage() {
  const onSearchHandler = (searchKeyword) => {
    console.log(searchKeyword);
  };

  const changePageHandler = (page) => {
    console.log(page);
  };

  return (
    <section className={classes["case-study"]}>
      <div className="container">
        <div className={classes["case-study-main"]}>
          <div className={classes["case-study-main-head"]}>
            <div className={classes["case-study-main-head__content"]}>
              <p className={classes["case-study-main-head__content__title"]}>
                Case Study
              </p>
              <p className={classes["case-study-main-head__content__text"]}>
                Explore Our Impactful Case Studies and Notable Achievements
              </p>
            </div>
            <div className={classes["case-study-main-head__buttonlink"]}>
              <ButtonNoBorder
                href={"sd"}
                textSize="md"
                RightIcon={
                  <TopRightArrow width={24} height={24} color="#fff" />
                }
              >
                View
              </ButtonNoBorder>
            </div>
          </div>
          <div className={classes["case-study-main-content"]}>
            <CaseStudyList items={DUMMY_CASE_STUDIES} />
          </div>
        </div>
      </div>
    </section>
  );
}
