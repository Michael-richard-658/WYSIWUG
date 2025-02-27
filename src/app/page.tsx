"use client"
import './home.css'
import Footer from './components/footer';
import { useState } from 'react';

export default function Home() {
  const [words,setWords] = useState('')
  const wordCount = words.length
  return (
    <div >
      <textarea className="main-text" value={words} onChange={e => setWords(e.target.value)}  />
      <Footer words={wordCount}/> 
    </div>
  );
}
