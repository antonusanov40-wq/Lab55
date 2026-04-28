import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
const [browserInfo, setBrowserInfo] = useState(null); 
const [comments, setComments] = useState([]);
const [showModal, setShowModal] = useState(false);
const [dark, setDark] = useState(false);

useEffect(() => {
  const info = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
  };

  localStorage.setItem("browserInfo", JSON.stringify(info));

  const saved = JSON.parse(localStorage.getItem("browserInfo"));
  setBrowserInfo(saved);
}, []);

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(res => res.json())
    .then(data => setComments(data))
    .catch(err => console.log(err));
}, []);

useEffect(() => {
  const timer = setTimeout(() => {
    setShowModal(true);
  }, 60000);

  return () => clearTimeout(timer);
}, []);

useEffect(() => {
  const hour = new Date().getHours();

  if (hour >= 21 || hour < 7) {
    setDark(true);
  }
}, []);

  return (
    <div className={dark 
  ? "min-h-screen bg-gray-900 text-white p-6"
  : "min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-black p-6"
}>
      <div className="max-w-4xl mx-auto space-y-6">

      <button
  onClick={() => setDark(!dark)}
  className="mb-4 px-4 py-2 bg-yellow-400 rounded-lg shadow hover:scale-105 transition"
>
  Змінити тему
</button>  

        <Header />
        <About />
        <Education />
        <Experience />
        <div className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-white/40">
  <h2 className="text-2xl font-bold text-indigo-700 mb-4">
    💬 Коментарі роботодавців
  </h2>

  <div className="space-y-4">
    {comments.map(comment => (
      <div
        key={comment.id}
        className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-xl shadow hover:scale-[1.02] transition"
      >
        <p className="font-semibold text-slate-800 mb-1">
          {comment.name}
        </p>

        <p className="text-sm text-slate-500 mb-2">
          {comment.email}
        </p>

        <p className="text-gray-700">
          {comment.body}
        </p>
      </div>
    ))}
  </div>
</div>

        {browserInfo && (
  <div className="bg-black text-white p-4 rounded-xl mt-4">
    <p><b>Browser:</b> {browserInfo.userAgent}</p>
    <p><b>Platform:</b> {browserInfo.platform}</p>
    <p><b>Language:</b> {browserInfo.language}</p>
  </div>)}

        <Footer />

        {showModal && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-2xl w-80 shadow-2xl relative">

      <h2 className="text-xl font-bold mb-3 text-indigo-600">
        📩 Зворотний зв’язок
      </h2>

      <form action="https://formspree.io/f/mvzdjynb" method="POST">

        <input
          name="name"
          placeholder="Ім’я"
          className="w-full mb-2 p-2 border rounded"
          required
        />

        <input
          name="email"
          placeholder="Email"
          type="email"
          className="w-full mb-2 p-2 border rounded"
          required
        />

        <input
          name="phone"
          placeholder="Телефон"
          className="w-full mb-2 p-2 border rounded"
        />

        <textarea
          name="message"
          placeholder="Повідомлення"
          className="w-full mb-2 p-2 border rounded"
        />

        <button className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700">
          Відправити
        </button>
      </form>

      <button
        onClick={() => setShowModal(false)}
        className="absolute top-2 right-3 text-red-500 text-xl"
      >
        ×
      </button>

    </div>
  </div>
)}
      </div>
    </div>
  );
}

export default App;