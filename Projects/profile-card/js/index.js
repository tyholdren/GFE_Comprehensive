class ProfileCard {
  constructor() {
    this.$appContainer = document.getElementById('app-container');
  }

  initialize() {
    const $cardWrapper = document.createElement('div');
    const $contentWrapper = document.createElement('div');
    const $profileImg = document.createElement('img');
    const $profileName = document.createElement('div');
    const $profileTitle = document.createElement('div');
    const $profileDesc = document.createElement('div');
    const $contactBtn = document.createElement('a');
    const $socialsWrapper = document.createElement('div');
    const $githubSocial = document.createElement('img');
    const $linkedInSocial = document.createElement('img');
    const $instagramSocial = document.createElement('img');
    const $twitterSocial = document.createElement('img');

    $profileImg.src = './img/profile.png';
    $profileImg.alt = 'user profile photo';
    $profileName.textContent = 'Sara Dole';
    $profileTitle.textContent = ' Front End Engineer @ Microsoft';
    $profileDesc.textContent =
      'I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.';
    $contactBtn.textContent = 'Contact me';
    $contactBtn.href = 'https://';
    $contactBtn.target = 'blank';

    $githubSocial.src = './img/github.svg';
    $githubSocial.alt = 'socials image';
    $linkedInSocial.src = './img/linkedIn.svg';
    $linkedInSocial.alt = 'socials image';
    $instagramSocial.src = './img/logo-instagram.svg';
    $instagramSocial.alt = 'socials image';
    $twitterSocial.src = './img/twitter-x.svg';
    $twitterSocial.alt = 'socials image';
    $socialsWrapper.className = 'socials-wrapper';

    $socialsWrapper.append(
      $githubSocial,
      $linkedInSocial,
      $instagramSocial,
      $twitterSocial
    );

    $contentWrapper.className = 'card-wrapper';
    $contentWrapper.append(
      $profileImg,
      $profileName,
      $profileDesc,
      $contactBtn
    );

    $cardWrapper.className = 'card-wrapper';
    $cardWrapper.append($contentWrapper, $socialsWrapper);
    this.$appContainer.append($cardWrapper);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const profileCard = new ProfileCard();
  profileCard.initialize();
});
