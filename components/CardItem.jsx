import React from 'react'
import Image from "next/image";
import styles from "../styles/CardItem.module.css"
const CardItem = ({m}) => {
    return (
      <div className={styles.card}>
        <div className={styles.bgcolor}>
          <center>
            {m.links.mission_patch ? (
              <Image
                src={m.links.mission_patch}
                alt={m.mission_name}
                width="350px"
                height="350px"
              />
            ) : (
              <div className={styles.imageNotFound}></div>
            )}
          </center>
        </div>
        <p className={styles.missionName}>
          <b>{m.mission_name.toUpperCase()}</b>
        </p>

        <p className={styles.paragraph}>
          <b>Mission Ids</b>
        </p>
        <div className={styles.flexible}>
          {m.mission_id.length < 1 ? (
            <> Not Found</>
          ) : (
            <ul>
              {m.mission_id.map((m, index) => (
                <li key={index}>{m}</li>
              ))}
            </ul>
          )}
        </div>
        <p className={styles.paragraph}>
          <b>Launch Year</b>: {m.launch_year}
        </p>
        <p className={styles.paragraph}>
          <b>Successful Launch</b>:{" "}
          {m.launch_success ? (
            m.launch_success.toString() === "true" ? (
              <>True</>
            ) : (
              <>False</>
            )
          ) : (
            <></>
          )}
        </p>
        <p className={styles.paragraph}>
          <b>Successful Landing</b>:{" "}
          {m.rocket.first_stage.cores[0].land_success ? (
            m.rocket.first_stage.cores[0].land_success.toString() === "true" ? (
              <>True</>
            ) : (
              <>False</>
            )
          ) : (
            <></>
          )}
        </p>
      </div>
    );
}

export default CardItem
