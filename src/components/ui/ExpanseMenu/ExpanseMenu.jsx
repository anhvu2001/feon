import React from "react";
import Link from "next/link";
import classes from "./ExpanseMenu.module.scss";
import Image from "next/image";

const ExpanseMenu = ({ options, isActive, menu }) => {
  const delays = options.map((item) => item.delay);
  const delayOptions = isActive
    ? [...delays]
    : [...delays].map((item) => item - 0.05).reverse();

  return (
    <div
      className={`${classes.wrapper} ${isActive ? classes.active : ""}`}
      style={{
        transitionDelay: "0.6s",
      }}
    >
      <div className={classes["menu-list-wrapper"]}>
        <div className={classes["menu-list-wrapper__map"]}>
          <div className={classes["menu-list-wrapper__image"]}>
            <Image
              fill
              src="https://api.ondigitals.com/wp-content/uploads/2023/11/GLOBE.png"
              alt="sadasdas"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              priority
            />
          </div>
          <span className={classes["menu-list-wrapper__head-line"]}>
            Leading Agency in South East Asia
          </span>
          <p className={classes["menu-list-wrapper__japan"]}>Japan </p>
          <p className={classes["menu-list-wrapper__china"]}>China </p>
          <p className={classes["menu-list-wrapper__thailand"]}>Thailand </p>
          <p className={classes["menu-list-wrapper__taiwan"]}>Taiwan </p>
          <p className={classes["menu-list-wrapper__vietnam"]}>Vietnam </p>
          <p className={classes["menu-list-wrapper__philippines"]}>
            Philippines{" "}
          </p>
          <p className={classes["menu-list-wrapper__malaysia"]}>Malaysia </p>
          <p className={classes["menu-list-wrapper__singapore"]}>Singapore </p>
          <p className={classes["menu-list-wrapper__indonesia"]}>Indonesia </p>
          <p className={classes["menu-list-wrapper__australia"]}>Australia </p>
        </div>

        <div
          className={`container--big ${classes["menu-list-wrapper-inner"]}`}
          style={{ overflowY: "auto" }}
        >
          <ul
            className={`${classes["menu-list"]}`}
            style={{ transitionDelay: isActive ? "0.8s" : "0.2s" }}
          >
            {menu.map((item, index) => (
              <li className={classes["menu-list-item"]} key={index}>
                <Link
                  href={item.href}
                  className={classes["menu-list-item__link"]}
                >
                  <span>{item.name}</span>
                  <div
                    className={`${classes["menu-list-item__circle"]} ${
                      classes[`circle-${index}`]
                    }`}
                  ></div>
                </Link>
              </li>
            ))}
          </ul>
          <ul
            className={classes["menu-social"]}
            style={{ transitionDelay: isActive ? "0.8s" : "0.2s" }}
          >
            <li className={classes["menu-social__item"]}>
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M23.7522 11.9123C23.7522 5.44498 18.5123 0.205078 12.0451 0.205078C5.57779 0.205078 0.337891 5.44498 0.337891 11.9123C0.337891 17.7555 4.61903 22.5988 10.2158 23.4778V15.2965H7.24182V11.9123H10.2158V9.3329C10.2158 6.39902 11.9625 4.77843 14.6376 4.77843C15.9188 4.77843 17.2585 5.00691 17.2585 5.00691V7.88649H15.7819C14.328 7.88649 13.8743 8.78908 13.8743 9.7148V11.9123H17.1212L16.6019 15.2965H13.8743V23.4778C19.4711 22.5988 23.7522 17.7555 23.7522 11.9123Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </li>
            <li className={classes["menu-social__item"]}>
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2808_6252)">
                    <path
                      d="M12.0971 5.93696C8.74321 5.93696 6.03794 8.64224 6.03794 11.9961C6.03794 15.35 8.74321 18.0553 12.0971 18.0553C15.451 18.0553 18.1563 15.35 18.1563 11.9961C18.1563 8.64224 15.451 5.93696 12.0971 5.93696ZM12.0971 15.9354C9.92974 15.9354 8.15786 14.1688 8.15786 11.9961C8.15786 9.82349 9.92446 8.05688 12.0971 8.05688C14.2698 8.05688 16.0364 9.82349 16.0364 11.9961C16.0364 14.1688 14.2645 15.9354 12.0971 15.9354ZM19.8174 5.68911C19.8174 6.47485 19.1846 7.10239 18.4042 7.10239C17.6184 7.10239 16.9909 6.46958 16.9909 5.68911C16.9909 4.90864 17.6237 4.27583 18.4042 4.27583C19.1846 4.27583 19.8174 4.90864 19.8174 5.68911ZM23.8305 7.12349C23.7409 5.23032 23.3084 3.55337 21.9215 2.17173C20.5399 0.790088 18.8629 0.357666 16.9698 0.262744C15.0186 0.152002 9.17036 0.152002 7.21919 0.262744C5.3313 0.352393 3.65435 0.784814 2.26743 2.16646C0.880518 3.5481 0.453369 5.22505 0.358447 7.11821C0.247705 9.06938 0.247705 14.9176 0.358447 16.8688C0.448096 18.762 0.880518 20.4389 2.26743 21.8206C3.65435 23.2022 5.32603 23.6346 7.21919 23.7295C9.17036 23.8403 15.0186 23.8403 16.9698 23.7295C18.8629 23.6399 20.5399 23.2075 21.9215 21.8206C23.3032 20.4389 23.7356 18.762 23.8305 16.8688C23.9413 14.9176 23.9413 9.07466 23.8305 7.12349ZM21.3098 18.9624C20.8985 19.9959 20.1022 20.7922 19.0633 21.2088C17.5077 21.8258 13.8163 21.6834 12.0971 21.6834C10.378 21.6834 6.6813 21.8206 5.13091 21.2088C4.09731 20.7975 3.30103 20.0012 2.88442 18.9624C2.26743 17.4067 2.40981 13.7153 2.40981 11.9961C2.40981 10.277 2.27271 6.58032 2.88442 5.02993C3.29575 3.99634 4.09204 3.20005 5.13091 2.78345C6.68657 2.16645 10.378 2.30884 12.0971 2.30884C13.8163 2.30884 17.5129 2.17173 19.0633 2.78345C20.0969 3.19478 20.8932 3.99106 21.3098 5.02993C21.9268 6.5856 21.7844 10.277 21.7844 11.9961C21.7844 13.7153 21.9268 17.412 21.3098 18.9624Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2808_6252">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
            <li className={classes["menu-social__item"]}>
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="24"
                  viewBox="0 0 26 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2808_6253)">
                    <path
                      d="M6.68859 23.6245H1.79063V7.85162H6.68859V23.6245ZM4.23697 5.70006C2.67076 5.70006 1.40039 4.40279 1.40039 2.83658C1.40039 2.08427 1.69924 1.36278 2.23121 0.830816C2.76317 0.298853 3.48466 0 4.23697 0C4.98928 0 5.71078 0.298853 6.24274 0.830816C6.7747 1.36278 7.07355 2.08427 7.07355 2.83658C7.07355 4.40279 5.80266 5.70006 4.23697 5.70006ZM25.0201 23.6245H20.1327V15.9463C20.1327 14.1165 20.0958 11.7698 17.5862 11.7698C15.0396 11.7698 14.6494 13.7579 14.6494 15.8145V23.6245H9.75668V7.85162H14.4543V10.0032H14.5228C15.1767 8.76393 16.774 7.45611 19.1571 7.45611C24.1141 7.45611 25.0254 10.7204 25.0254 14.9602V23.6245H25.0201Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2808_6253">
                      <rect width="25.5" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
            <li className={classes["menu-social__item"]}>
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="53"
                  height="19"
                  viewBox="0 0 53 19"
                  fill="none"
                >
                  <path
                    d="M15.7935 15.3333C15.7753 15.8085 15.7891 16.2849 15.7873 16.761C15.7851 17.4465 15.2237 17.9952 14.5163 17.9952C9.9129 17.997 5.30905 17.9952 0.705643 18C0.532893 18.0004 0.495146 17.9498 0.500475 17.7923C0.516906 17.3322 0.475162 16.8692 0.572861 16.4126C0.668339 15.9656 0.885498 15.5774 1.17815 15.2251C3.13746 12.8661 5.09633 10.5067 7.0552 8.14723C8.39989 6.52783 9.74503 4.90842 11.0893 3.28815C11.1253 3.24531 11.1546 3.19727 11.2074 3.12283H10.9436C7.69468 3.12283 4.4453 3.12327 1.19636 3.1224C0.877949 3.12197 0.91836 3.16395 0.91836 2.8424C0.91836 1.91239 0.921469 0.981944 0.923245 0.051499C0.919249 0.0346212 0.914808 0.0173106 0.910811 0H15.7877C15.7859 0.0160123 15.7842 0.0315919 15.782 0.0476042C15.8277 0.901017 15.7589 1.73193 15.2992 2.49186C15.0714 2.86837 14.7481 3.16871 14.4723 3.50626C11.7536 6.83379 9.03139 10.1583 6.30958 13.4837C5.88103 14.0073 5.4516 14.5301 5.01195 15.0659C5.09988 15.1152 5.18071 15.0953 5.25531 15.0953C8.68189 15.0966 12.1089 15.0979 15.5355 15.0927C15.7278 15.0922 15.8015 15.1251 15.7935 15.3333Z"
                    fill="white"
                  />
                  <path
                    d="M30.0636 15.9509C30.0636 12.1772 30.0619 8.40355 30.0684 4.62989C30.0689 4.42872 30.0108 4.38325 29.8158 4.38583C29.0015 4.39655 28.1868 4.3987 27.3726 4.38497C27.1627 4.38154 27.1164 4.44845 27.1295 4.63589C27.1448 4.85807 27.133 5.08197 27.133 5.32603C23.8926 3.08533 19.7563 3.83981 17.5068 6.45324C15.2285 9.0997 15.2259 12.8884 17.4815 15.522C19.7083 18.1225 23.8297 18.9482 27.1221 16.6835C27.2102 17.426 27.7186 17.8746 28.4556 17.8755C28.9282 17.8759 29.4008 17.8695 29.8734 17.8789C30.0274 17.8819 30.0693 17.8364 30.0671 17.6876C30.0588 17.1086 30.0636 16.5295 30.0636 15.9509ZM22.9251 15.1012C20.6046 15.1012 18.7465 13.2727 18.7478 10.99C18.7491 8.73254 20.6216 6.89803 22.9273 6.89503C25.2318 6.89203 27.1269 8.74626 27.126 11.0037C27.1247 13.2684 25.2462 15.1012 22.9251 15.1012Z"
                    fill="white"
                  />
                  <path
                    d="M45.4953 4.00321C41.548 3.93036 38.2213 7.02516 38.2256 11.0053C38.2299 14.9982 41.5424 18.0248 45.3687 18.0018C49.3016 18.0018 52.51 14.8665 52.5 11.0121C52.4896 7.09503 49.3094 4.07351 45.4953 4.00321ZM45.35 15.1115C43.0482 15.109 41.1739 13.268 41.1734 11.0095C41.173 8.74085 43.0569 6.8867 45.3596 6.88883C47.6644 6.89138 49.5548 8.74767 49.5539 11.0078C49.5531 13.271 47.6644 15.1141 45.35 15.1115Z"
                    fill="white"
                  />
                  <path
                    d="M36.1867 17.7391C36.1867 17.9464 36.1406 18.0053 35.9337 17.9996C35.356 17.9836 34.7775 17.9953 34.199 17.9936C33.5854 17.9923 33.136 17.5466 33.136 16.9243C33.1339 11.322 33.1351 5.71919 33.1351 0.1164C33.1351 0.0947645 33.1385 0.0731288 33.1398 0.0514931C33.136 0.0346172 33.1317 0.0173086 33.1279 0H36.1749C36.1745 0.0147123 36.174 0.0298573 36.1732 0.0445696C36.1762 0.1164 36.1812 0.188664 36.1812 0.260494C36.1817 6.08657 36.1808 11.9131 36.1867 17.7391Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {options.map((item, index) => (
        <div
          key={index}
          className={classes["overlay-item"]}
          style={{
            backgroundColor: item.backgroundColor,
            transitionDelay: `${delayOptions[index]}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default ExpanseMenu;
