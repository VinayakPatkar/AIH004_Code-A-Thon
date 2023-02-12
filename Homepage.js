import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styles from "./MacBookAir2.module.css";

const MacBookAir2 = () => {
  const onClassicButtonContainerClick = useCallback(() => {
    // Please sync "MacBook Air - 3" to the project
  }, []);

  return (
    <div className={styles.macbookAir2}>
      <div className={styles.header}>
        <img
          className={styles.v1015101a1Icon}
          alt=""
          src="../18220838-v1015101a-1@2x.png"
        />
        <img className={styles.image1Icon} alt="" src="../image-1@2x.png" />
        <img className={styles.doctorsIcon} alt="" src="../doctors@2x.png" />
      </div>
      <div className={styles.classicButtonParent}>
        <Button
          className={styles.classicButton}
          variant="outline-primary"
        >{`Book Online `}</Button>
        <Button className={styles.classicButton1} variant="outline-primary">
          Book on Call
        </Button>
        <div className={styles.h2}>
          <b className={styles.alwaysWithYou}>ALWAYS WITH YOU, BESIDE YOU!</b>
          <div
            className={styles.x7MedicalEmergency}
          >{`24x7 Medical Emergency Response Service `}</div>
        </div>
      </div>
      <div className={styles.butWhyOnlyApolloParent}>
        <b className={styles.butWhyOnly}>BUT WHY ONLY APOLLO ?</b>
        <b className={styles.butWhyOnly1}>BUT WHY ONLY APOLLO ?</b>
        <b className={styles.butWhyOnly2}>BUT WHY ONLY APOLLO ?</b>
        <b className={styles.butWhyOnly3}>BUT WHY ONLY APOLLO ?</b>
        <b className={styles.butWhyOnly4}>BUT WHY ONLY APOLLO ?</b>
      </div>
      <div className={styles.div}>
        <div className={styles.div1}>
          <div className={styles.div2}>
            <div className={styles.div3}>
              <img
                className={styles.iconParkSolidpeopleSafeOn}
                alt=""
                src="../iconparksolidpeoplesafeone.svg"
              />
              <div className={styles.safest}>Safest</div>
            </div>
            <div className={styles.div4}>
              <img
                className={styles.uiltachometerFastAltIcon}
                alt=""
                src="../uiltachometerfastalt.svg"
              />
              <div className={styles.fast}>Fast</div>
            </div>
            <div className={styles.div5}>
              <img
                className={styles.iconParkSolidpeopleSafeOn}
                alt=""
                src="../mdideal.svg"
              />
              <div className={styles.reliable}>Reliable</div>
            </div>
            <div className={styles.div6}>
              <img
                className={styles.medicalIconambulance}
                alt=""
                src="../medicaliconambulance.svg"
              />
              <div className={styles.modernAmenities}>Modern Amenities</div>
            </div>
            <div className={styles.div7}>
              <img
                className={styles.mingcutecurrencyRupeeFillIcon}
                alt=""
                src="../mingcutecurrencyrupeefill.svg"
              />
              <div className={styles.costEfficient}>Cost Efficient</div>
            </div>
            <div className={styles.div8}>
              <img
                className={styles.medicalIconambulance}
                alt=""
                src="../healthiconscallcentrenegative.svg"
              />
              <div className={styles.x7On}>24 X 7 On Call Support</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.whenYouHaveAnEmergencyThWrapper}>
        <b className={styles.whenYouHave}>
          When you have an emergency, there is an urge to do whatever it takes
          to see people get assistance. We, at Apollo, help you in the hour of
          need to make your work easy by booking the best hospitals and doctors
          nearby your location as well as managing quick support for your loved
          ones. because, we both know that “A Friend in Need is A Friend
          Indeed”.
        </b>
      </div>
      <div className={styles.facingSomeSeriousSymptomsParent}>
        <div className={styles.facingSomeSerious}>
          FACing some serious symptoms?
        </div>
        <div className={styles.majorDiseasesInitially}>
          Major diseases initially show minor signs of their presence in our
          immune system. Undergo our Predictive Analysis and get notified early
          if any serious disease persists!
        </div>
        <div
          className={styles.classicButton2}
          onClick={onClassicButtonContainerClick}
        >
          <div className={styles.button}>
            <b className={styles.getStarted}>Predict Now</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacBookAir2;
