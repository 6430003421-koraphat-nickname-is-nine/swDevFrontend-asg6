import styles from "./banner.module.css";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image
        src={"/img/cover.jpg"}
        alt="Banner"
        fill={true}
        priority
        objectFit="cover"
      />
      <div className={styles.bannerText}>
        <h1 className="text-4xl pb-5 font-bold">Vaccine Service Center</h1>
        <p className="text-xl">
          We're pleased to announce that vaccination appointments are now
          available at{" "}
          <a
            href="https://youtu.be/xvFZjo5PgG0?si=nBogDFqQOyONC3Fr"
            target="_blank"
          >
            Risiraj Hospital
          </a>
          . Protect yourself and your loved ones by scheduling your appointment
          today! All eligible individuals can receive their vaccine, and
          walk-ins are welcome. Stay safe, stay healthy, and help us move toward
          a brighter future. For more information, visit{" "}
          <a
            href="https://youtu.be/xvFZjo5PgG0?si=nBogDFqQOyONC3Fr"
            target="_blank"
          >
            our official website
          </a>{" "}
          or call 248-434-5508. Together, we can end this pandemic!
        </p>
      </div>
    </div>
  );
}
