import Navbar from "./components/Navbar"
import Header from "./components/header"
import SearchBar from "./components/SearchBar"
import JobCard from "./components/JobCard"
import jobData from "./JobDummyData"
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import {db} from "./firebase.config"
import { useEffect, useState } from "react"
//npm run dev
function App() {

  const [jobs, setJobs] = useState([]);
  const fetchJobs = async() =>{
    const tempJobs = []
    const jobRef =query(collection(db,"jobs"));
    const q = query(jobRef, orderBy("postedOn", "desc"));
    const req
     = await getDocs(q);

    req.forEach((job) => {
    
    //  console.log(doc.id, " => ", doc.data());
    tempJobs.push({
      ...job.data(),
      id:job.id,
      postedOn: job.data().postedOn.toDate()
    })
});
setJobs(tempJobs);
  }

  useEffect(()=>{
    fetchJobs()
  })


  return (
    
      <div>
        <Navbar />
        <Header />
        <SearchBar/> 
        {jobs.map((job)=> (
          <JobCard key={job.id} {...job}/>
        ))} 
      </div>

  )
}

export default App