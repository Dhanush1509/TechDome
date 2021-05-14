import React,{useContext} from 'react'
import styles from '../styles/Filter.module.css'
import programContext from "../context/program/programContext"
const Filter = () => {
  const {addLandSuccess,addLaunchSuccess,addYear,year,launch_success,land_success}=useContext(programContext)

    return (
      <center>
        <section>
          <p className={styles.title}>Filters</p>
          <p className={styles.underline}>
            <b>Launch Year</b>
          </p>
        </section>

        <div className={styles.row}>
          {[...Array(15).keys()].map((x, index) => (
            <div className={styles.col} key={index}>
              <button
                className={
                  year === 2006 + x ? styles.ButtonActive : styles.Button
                }
                key={2006 + x}
                value={2006 + x}
                onClick={() => addYear(2006 + x)}
              >
                {2006 + x}
              </button>
            </div>
          ))}
        </div>

        <h4 className={styles.underline}>Successful Launch</h4>
        <div className={styles.row}>
          <div className={styles.col}>
            <button
              className={
                launch_success?.toString() === "true"
                  ? styles.ButtonActive
                  : styles.Button
              }
              value="true"
              onClick={() => addLaunchSuccess(true)}
            >
              Yes
            </button>
          </div>
          <div className={styles.col}>
            <button
              className={
                launch_success?.toString() === "false"
                  ? styles.ButtonActive
                  : styles.Button
              }
              value="false"
              onClick={() => addLaunchSuccess(false)}
            >
              No
            </button>
          </div>
        </div>
        <h4 className={styles.underline}>Successful Landing</h4>
        <div className={styles.row}>
          <div className={styles.col}>
            <button
              className={
                land_success?.toString() === "true"
                  ? styles.ButtonActive
                  : styles.Button
              }
              value="true"
              onClick={() => addLandSuccess(true)}
            >
              Yes
            </button>
          </div>
          <div className={styles.col}>
            <button
              className={
                land_success?.toString() === "false"
                  ? styles.ButtonActive
                  : styles.Button
              }
              value="false"
              onClick={() => addLandSuccess(false)}
            >
              No
            </button>
          </div>
        </div>
      </center>
    );
}

export default Filter
