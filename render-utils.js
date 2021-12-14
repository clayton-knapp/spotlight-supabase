export function renderMicrophoneCard(eachMicrophone) {
    const div = document.createElement('div');
    const makeModelP = document.createElement('p');
    const typeP = document.createElement('p');
    const countryP = document.createElement('p');

    makeModelP.textContent = eachMicrophone.make_model;
    typeP.textContent = eachMicrophone.type;
    countryP.textContent = eachMicrophone.country;

    div.classList.add('card');

    div.append(makeModelP, typeP, countryP);
    return div;
}

export function renderPreampCard(eachPreamp) {
    const div = document.createElement('div');
    const makeModelP = document.createElement('p');
    const countryP = document.createElement('p');
    const reviewsDiv = document.createElement('div');

    makeModelP.textContent = eachPreamp.make_model;
    countryP.textContent = eachPreamp.country;

    for (let i = 0; i < eachPreamp.reviews.length; i++){
        const reviewP = document.createElement('p');
        reviewP.textContent = eachPreamp.reviews[i];
        reviewsDiv.append(reviewP);
    }

    
    div.classList.add('card');

    div.append(makeModelP, countryP, reviewsDiv);
    return div;
}

export function renderCompressorCard(eachCompressor) {
    const div = document.createElement('div');
    const makeModelP = document.createElement('p');
    const typeP = document.createElement('p');
    const ownerIDP = document.createElement('p');

    makeModelP.textContent = eachCompressor.make_model;
    typeP.textContent = eachCompressor.type;
    ownerIDP.textContent = "Owner ID: " + eachCompressor.owner_id;

    div.classList.add('card');

    div.append(makeModelP, typeP, ownerIDP);
    return div;
}

export function renderOwnerCard(eachOwner) {
    const div = document.createElement('div');
    const nameP = document.createElement('p');
    const yearJoinedP = document.createElement('p');
    const percentP = document.createElement('p');

    nameP.textContent = eachOwner.name;
    yearJoinedP.textContent = 'Joined: ' + eachOwner.year_joined;
    percentP.textContent = 'Percentage: ' + eachOwner.percentage;

    div.classList.add('card');

    div.append(nameP, yearJoinedP, percentP);
    return div;
}