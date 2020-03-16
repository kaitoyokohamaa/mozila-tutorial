const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {
  let storyText = "It was 94 fahrenheit outside, so :xItem:went for a walk. When they got to :yItem:, they stared in horror for a few moments, then :zItem:. Bob saw the whole thing, but was not surprised — :kItem: weighs 300 pounds, and it was a hot day."
  let insertX = ['Willy the', 'Goblin Big Daddy', 'Father ', 'Christmas'];
  let insertY = ['the soup kitchen', 'Disneyland ', 'the White House'];
  let insertZ = ['spontaneously combusted ', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  textch= newStory.replace(':xItem:', xItem).replace(':yItem:', yItem).replace(':zItem:', zItem).replace(':kItem:', xItem)
  
  if (customName.value !== '') {
    let name = customName.value;
    textch= textch.replace('Bob', name);
  }
  if (document.getElementById("uk").checked) {
    let weight = Math.round(300 * 0.071428639017158);
    let temperature = Math.round((94) - 32 / 1.8);

    let join = weight + ' stone';
    let joint = temperature + ' centigrade';
    textch=textch.replace('94 fahrenheit', joint).replace('300 pounds', join);

  }
  
  story.textContent = textch;
  story.style.visibility = 'visible';
}

