document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    audio.volume = 0.3; // Set volume to 30%
  
    audio.addEventListener('ended', () => {
      audio.currentTime = 0; // Reset playback to the beginning
      audio.play(); // Start playing again
    });
  });

import {annotate} from 'https://unpkg.com/rough-notation?module';


function applyToAllClass(className, style) {

  const n = document.querySelectorAll(`.${className}`);

  for(let i=0; i<n.length; i++) {
    const element = n[i];
    annotate(element, style).show();
  }

};

function applyToAllTag(tagName, style) {

  const n = document.querySelectorAll(tagName);

  for(let i=0; i<n.length; i++) {
    const element = n[i];
    annotate(element, style).show();
  }

};

function applyToAllID(idName, style) {

  const n = document.querySelectorAll(`#${idName}`);

  for(let i=0; i<n.length; i++) {
    const element = n[i];
    annotate(element, style).show();
  }

}

const hilightStyle = { type: 'highlight', color: 'yellow', iterations: 1, multiline: true };
const underlineStyle = { type: 'underline', color: 'red' };
const circleStyle = { type: 'circle', color: 'blue', padding: 10 };
const boxStyle = { type: 'box', color: 'orange' };