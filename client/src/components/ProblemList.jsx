import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import icon from '../assets/Images/leetcode-icon.webp'
import { Link } from "react-router-dom";
export function ProblemList() {
  const [problems,setProblems] = useState([]);
  const init = async() => {
    const response = await fetch('http://localhost:3000/problems',{
      method:'GET',
    })
    const json = await response.json()
    setProblems(json.problems)
  }

  useEffect(() => {
    init()
  },[])
  return (
    <>
      <Header icon={icon}/>
      {problems.map((problem) => {
        return (
          <Link to='single-problem' style={{textDecoration:'none'}} state={problem.problemId}>
            <div style={{ display: "flex" }} key={problem.problemId}>
              <h3 style={{ display: "flex", width: "1000px" }}>
                {problem.title}
              </h3>
              <p style={{ display: "flex", justifyContent: "center" }}>
                {problem.acceptance}
              </p>
              <p style={{ display: "flex", justifyContent: "center" }}>
                {problem.difficulty}
              </p>
            </div>
          </Link>
        );
      })}
    </>
  );
}
