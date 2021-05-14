import Head from "next/head";
import styles from "../styles/Home.module.css";
import Filter from "../components/Filter"
import Card from "../components/Card"
import React,{useContext,useEffect,useState} from "react";
import programContext from "../context/program/programContext"
import Footer from "../components/Footer"
export default function Home() {
 const { year, land_success, launch_success } = useContext(programContext);
 const [missions,setMissions]=useState([])
 const [loading,setLoading]=useState(false)
 useEffect(async () => {
   let string = "https://api.spacexdata.com/v3/launches?limit=100";
   const res = await fetch(string);
   setMissions(await res.json());
 }, []);
useEffect(async()=>{
  
  let string = "https://api.spacexdata.com/v3/launches?limit=100";

  if (year) {
    string += `&launch_year=${year}`;
   
  }
  if (
    launch_success?.toString() === "false" ||
    launch_success?.toString() === "true"
  ) {
    string += `&launch_success=${launch_success}`;
  }
  if (
    land_success?.toString() === "false" ||
    land_success?.toString() === "true"
  ) {
    string += `&land_success=${land_success}`;
  }
  
  setLoading(true)
  const res = await fetch(string);

  setMissions(await res.json());
setLoading(false)

},[year, land_success, launch_success])

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          {" "}
          <Head>
            <title>Spacex Launch Programs</title>
            <meta name="keywords" content="spacex webdevelopment" />
            <meta name="description" content="Spacex Launch Programs" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1 className={styles.title}>SpaceX Launch Programs</h1>
          <div>
            <div className={styles.left}>
              <Filter />
            </div>
            <div className={styles.right}>
              {loading ? (
                <>
                  <div className={styles.circularSpinner}></div>
                </>
              ) : missions.length > 0 ? (
                <Card missions={missions} />
              ) : (
                <div className={styles.notFound}>Nothing found</div>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}


