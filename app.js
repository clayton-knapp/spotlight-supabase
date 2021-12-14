// import functions and grab DOM elements
import { fetchMicrophones, fetchPreamps, fetchCompressors, fetchOwners } from './fetch-utils.js';
import { renderMicrophoneCard, renderPreampCard, renderCompressorCard, renderOwnerCard } from './render-utils.js';

const microphonesListEl = document.querySelector('#microphones-container');
const preampsListEl = document.querySelector('#preamps-container');
const compressorsListEl = document.querySelector('#compressors-container');
const ownersListEl = document.querySelector('#owners-container');


// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

window.addEventListener('load', async()=> {
    const microphonesData = await fetchMicrophones();
    
    for (let eachMicrophone of microphonesData) {
        const microphoneEl = renderMicrophoneCard(eachMicrophone);
        microphonesListEl.append(microphoneEl);
    }

    const preampsData = await fetchPreamps();

    for (let eachPreamp of preampsData) {
        const preampEl = renderPreampCard(eachPreamp);
        preampsListEl.append(preampEl);
    }

    const compressorsData = await fetchCompressors();
    
    for (let eachCompressor of compressorsData) {
        const compressorEl = renderCompressorCard(eachCompressor);
        compressorsListEl.append(compressorEl);
    }

    const ownersData = await fetchOwners();

    for (let eachOwner of ownersData) {
        const ownerEl = renderOwnerCard(eachOwner);
        ownersListEl.append(ownerEl);
    }

});