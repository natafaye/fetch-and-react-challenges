export default function Home() {
  return (
    <div className="col mt-3">
      <p>
        These are a series of challenges to practice connecting a React
        app to a backend REST API using fetch.
      </p>
      <p>
        You can switch between the 9 challenges using the top navbar.
        The #1 challenge is the easiest and they tend to get harder as the numbers get higher.
      </p>
      <p>
        Each challenge will ask you to correctly communicate with a fake backend that uses
        Mirage.js to intercept fetch requests and give a response as if from a backend.
      </p>
    </div>
  )
}