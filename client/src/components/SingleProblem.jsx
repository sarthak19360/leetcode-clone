import { useLocation, useParams } from "react-router-dom";
import icon from '../assets/Images/leetcode-icon.webp'
import { Header } from "./Header";
import { useEffect, useState } from "react";

export function SingleProblem() {
  const cleanId = useLocation().state;
  const [problem, setProblem] = useState(null);
  const [submission, setSubmission] = useState("");

  const init = async () => {
    const response = await fetch(`http://localhost:3000/problem/` + cleanId, {
      method: 'GET',
    })

    const json = await response.json();
    setProblem(json.problem);
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <Header icon={icon} />
      <div id="single-problem">
        {problem && (<div className="problem">
          <h1>{problem.title}</h1>
          <p>
            <b>Acceptance Rate:</b> {problem.acceptance}
          </p>
          <p>
            <b>Difficulty:</b> {problem.difficulty}
          </p>
          <div className="problem-desc">
            <p>{problem.description}</p>
            <br />

            <p>
              <b>INPUT: </b>
              {problem.exampleIn}
            </p>
            <p>
              <b>OUTPUT: </b>
              {problem.exampleOut}
            </p>
          </div>
        </div>)}

        <div className="text-editor">
          <textarea
            id=""
            cols="50"
            rows="25"
            placeholder="Write your code here"
            onChange={(e) => {
              setSubmission(e.target.value)
            }}
          ></textarea>
        </div>
        <div
          style={{
            display: "flex",
            paddingBottom: "20px",
          }}
        >
          <button
            style={{
              fontSize: "20px",
              borderRadius: "20px",
              width: "250px",
              height: "50px",
            }}
            onClick={async () => {
              const response = await fetch('http://localhost:3000/submission', {
                method: 'POST',
                headers: {
                  'authorization': localStorage.getItem('token')
                },
                body: JSON.stringify({
                  problemId: cleanId,
                  submission: submission
                })
              })

              const json = await response.json()
              console.log(json)
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
