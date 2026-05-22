import data from "./data.json";

function App() {
  return (
    <div className="flex items-center justify-center bg-white md:min-h-screen md:bg-light-lavender lg:min-h-screen lg:bg-light-lavender">
      <div className="flex flex-col md:flex-row w-full max-w-185 md:rounded-3xl md:shadow-xl overflow-hidden">
        
        <div className="bg-linear-to-b from-light-slate-blue to-light-royal-blue text-white rounded-b-3xl md:rounded-b-none md:rounded-l-3xl p-8 w-full md:w-1/2 flex flex-col items-center gap-4">
          <p className="text-lg font-semibold text-center text-light-lavender">
            Your Result
          </p>
          <div className="flex items-center justify-center w-36 h-36 bg-linear-to-b from-violet-blue to-persian-blue rounded-full mt-4">
            <p className="text-5xl text-white font-bold font-hanken mt-2">
              76
              <span className="text-sm text-light-lavender block text-center mt-2">
                of 100
              </span>
            </p>
          </div>
          <p className="text-2xl font-semibold text-center text-white">Great</p>
          <p className="text-center text-light-lavender font-hanken font-normal">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>

        <div className="flex flex-col items-start justify-start bg-white p-8 gap-4 w-full md:w-1/2">
          <p className="text-lg text-dark-gray-blue font-semibold">Summary</p>
          {data.map((item) => (
            <div
              key={item.category}
              className="flex items-center justify-between p-4 rounded-lg w-full"
              style={{ backgroundColor: `var(${item.backgroundColor})` }}
            >
              <p
                className="flex items-center gap-2 text-sm font-medium"
                style={{ color: `var(${item.color})` }}
              >
                <img
                  src={item.icon}
                  alt={`${item.category} icon`}
                  className="w-4 h-4"
                />
                {item.category}
              </p>
              <p className="text-sm font-bold text-dark-gray-blue">
                {item.score}{" "}
                <span className="text-gray-400 font-normal">/ 100</span>
              </p>
            </div>
          ))}
          <button className="bg-dark-gray-blue w-full text-white rounded-full py-3 mt-auto hover:bg-linear-to-b hover:from-light-slate-blue hover:to-light-royal-blue transition-colors duration-300 cursor-pointer">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
