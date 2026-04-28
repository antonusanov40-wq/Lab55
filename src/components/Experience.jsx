function Experience() {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
      <h2 className="text-2xl font-bold text-pink-600 mb-3">Навички</h2>
      <ul className="space-y-2 text-gray-700">
        <li className="hover:text-indigo-500 transition">HTML</li>
        <li className="hover:text-indigo-500 transition">CSS</li>
        <li className="hover:text-indigo-500 transition">React</li>
        <li className="hover:text-indigo-500 transition">Git</li>
      </ul>
    </section>
  );
}

export default Experience;