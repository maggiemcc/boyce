function openNav() {
    document.querySelector("#open").style.display = "none";
    document.querySelector("#nav").style.width = "100%";
}

function closeNav() {
    document.querySelector("#nav").style.width = "0";
    document.querySelector("#open").style.display = "block";
}







var chapterJson = [
  {
    chapter_number: 0, display: '',
    strength: '',
    dexterity: '',
    constitution: '',
    intelligence: '',
    magic: '',
    charisma: '',
    luck: '',

    appraisal: {
      level: "",
      percentage: "",
    },
    athletics: {
      level: "",
      percentage: "",
    },
    bluff: {
      level: "",
      percentage: "",
    },
    diplomacy: {
      level: "",
      percentage: "",
    },
    heal: {
      level: "",
      percentage: "",
    },
    insight: {
      level: "",
      percentage: "",
    },
    math: {
      level: "",
      percentage: "",
    },
    nav: {
      level: "",
      percentage: "",
    },
    percept: {
      level: "",
      percentage: "",
    },
    sense: {
      level: "",
      percentage: "",
    },
    walk: {
      level: "",
      percentage: "",
    },
    wind: {
      level: "",
      percentage: "",
    },


  },
  {
    chapter_number: 1, display: 'Chapter One',
    strength: '7.94',
    dexterity: '8.23',
    constitution: '7.82',
    intelligence: '15.56',
    magic: '11.22',
    charisma: '8.98',
    luck: '13.45',

    appraisal: {
      level: "Novice",
      percentage: "0%",
    },
    athletics: {
      level: "Novice",
      percentage: "0%",
    },
    bluff: {
      level: "Novice",
      percentage: "0%",
    },
    diplomacy: {
      level: "Novice",
      percentage: "0%",
    },
    heal: {
      level: "Novice",
      percentage: "0%",
    },
    insight: {
      level: "Novice",
      percentage: "0%",
    },
    math: {
      level: "Novice",
      percentage: "0%",
    },
    nav: {
      level: "Novice",
      percentage: "0%",
    },
    percept: {
      level: "Novice",
      percentage: "0%",
    },
    sense: {
      level: "Novice",
      percentage: "0%",
    },
    walk: {
      level: "Novice",
      percentage: "0%",
    },
    wind: {
      level: "Novice",
      percentage: "0%",
    },
  },

  {
    chapter_number: 2, display: 'Chapter Five',

    strength: '8.26',
    dexterity: '8.51',
    constitution: '7.99',
    intelligence: '15.58',
    magic: '11.38',
    charisma: '9.17',
    luck: '13.71',

    appraisal: {
      level: "Beginner 1",
      percentage: "50%",
    },
    athletics: {
      level: "Beginner 2",
      percentage: "40%",
    },
    bluff: {
      level: "Beginner 1",
      percentage: "50%",
    },
    diplomacy: {
      level: "Beginner 2",
      percentage: "45%",
    },
    heal: {
      level: "Beginner 7",
      percentage: "66%",
    },
    insight: {
      level: "Beginner 2",
      percentage: "9%",
    },
    math: {
      level: "Beginner 2",
      percentage: "45%",
    },
    nav: {
      level: "Beginner 1",
      percentage: "10%",
    },
    percept: {
      level: "Beginner 2",
      percentage: "30%",
    },
    sense: {
      level: "Beginner 1",
      percentage: "20%",
    },
    walk: {
      level: "Beginner 1",
      percentage: "90%",
    },
    wind: {
      level: "Beginner 2",
      percentage: "82%",
    },
  },

  {
    chapter_number: 3, display: 'Chapter Ten',

    strength: '8.8',
    dexterity: '9.03',
    constitution: '8.52',
    intelligence: '16.09',
    magic: '11.72',
    charisma: '9.68',
    luck: '14.07',

    appraisal: {
      level: "Beginner 2",
      percentage: "35%",
    },
    athletics: {
      level: "Beginner 4",
      percentage: "38%",
    },
    bluff: {
      level: "Beginner 3",
      percentage: "26%",
    },
    diplomacy: {
      level: "Beginner 4",
      percentage: "35%",
    },
    heal: {
      level: "Beginner 9",
      percentage: "72%",
    },
    insight: {
      level: "Beginner 4",
      percentage: "20%",
    },
    math: {
      level: "Beginner 4",
      percentage: "10%",
    },
    nav: {
      level: "Beginner 2",
      percentage: "80%",
    },
    percept: {
      level: "Beginner 4",
      percentage: "33%",
    },
    sense: {
      level: "Beginner 3",
      percentage: "16%",
    },
    walk: {
      level: "Beginner 3",
      percentage: "85%",
    },
    wind: {
      level: "Beginner 2",
      percentage: "82%",
    },
  },

  {
    chapter_number: 4, display: 'Chapter Sixteen',

    strength: '9.27',
    dexterity: '10.05',
    constitution: '9.23',
    intelligence: '16.58',
    magic: '12.24',
    charisma: '10.39',
    luck: '14.21',

    appraisal: {
      level: "Beginner 7",
      percentage: "67%",
    },
    athletics: {
      level: "Intermediate 1",
      percentage: "85%",
    },
    bluff: {
      level: "Intermediate 1",
      percentage: "23%",
    },
    diplomacy: {
      level: "Beginner 10",
      percentage: "74%",
    },
    heal: {
      level: "Beginner 9",
      percentage: "72%",
    },
    insight: {
      level: "Beginner 9",
      percentage: "37%",
    },
    math: {
      level: "Beginner 5",
      percentage: "62%",
    },
    nav: {
      level: "Beginner 6",
      percentage: "77%",
    },
    percept: {
      level: "Intermediate 2",
      percentage: "70%",
    },
    sense: {
      level: "Beginner 8",
      percentage: "96%",
    },
    walk: {
      level: "Intermediate 4",
      percentage: "24%",
    },
    wind: {
      level: "Beginner 5",
      percentage: "22%",
    },
  },

  {
    chapter_number: 5, display: 'Chapter Twenty-Six',

    strength: "10.16",
    dexterity: "11.21",
    constitution: "10.14",
    intelligence: "17.07",
    magic: "12.89",
    charisma: "11.12",
    luck: "14.53",

    appraisal: {
      level: "Intermediate 1",
      percentage: "56%",
    },
    athletics: {
      level: "Intermediate 3",
      percentage: "86%",
    },
    bluff: {
      level: "Intermediate 2",
      percentage: "72%",
    },
    diplomacy: {
      level: "Intermediate 4",
      percentage: "47%",
    },
    heal: {
      level: "Beginner 10",
      percentage: "98%",
    },
    insight: {
      level: "Intermediate 3",
      percentage: "38%",
    },
    math: {
      level: "Beginner 6",
      percentage: "80%",
    },
    nav: {
      level: "Beginner 9",
      percentage: "40%",
    },
    percept: {
      level: "Intermediate 4",
      percentage: "51%",
    },
    sense: {
      level: "Intermediate 1",
      percentage: "79%",
    },
    walk: {
      level: "Intermediate 5",
      percentage: "63%",
    },
    wind: {
      level: "Beginner 6",
      percentage: "48%",
    },
  },

  {
    chapter_number: 6, display: 'Chapter Thirty-Two',

    strength: "11.02",
    dexterity: "12.01",
    constitution: "10.97",
    intelligence: "17.64",
    magic: "13.06",
    charisma: "11.53",
    luck: "14.74",

    appraisal: {
      level: "Intermediate 4",
      percentage: "39%",
    },
    athletics: {
      level: "Intermediate 4",
      percentage: "30%",
    },
    bluff: {
      level: "Intermediate 3",
      percentage: "54%",
    },
    diplomacy: {
      level: "Intermediate 6",
      percentage: "9%",
    },
    heal: {
      level: "Intermediate 3",
      percentage: "78%",
    },
    insight: {
      level: "Intermediate 5",
      percentage: "87%",
    },
    math: {
      level: "Beginner 7",
      percentage: "4%",
    },
    nav: {
      level: "Intermediate 1",
      percentage: "99%",
    },
    percept: {
      level: "Intermediate 6",
      percentage: "35%",
    },
    sense: {
      level: "Intermediate 4",
      percentage: "14%",
    },
    walk: {
      level: "Intermediate 6",
      percentage: "73%",
    },
    wind: {
      level: "Beginner 8",
      percentage: "74%",
    },
  },

  {
    chapter_number: 7, display: 'Chapter One',

    strength: "12.21",
    dexterity: "13.11",
    constitution: "12.19",
    intelligence: "18.31",
    magic: "13.76",
    charisma: "12.44",
    luck: "15.19",

    appraisal: {
      level: "Intermediate 5",
      percentage: "14%",
    },
    athletics: {
      level: "Intermediate 4",
      percentage: "92%",
    },
    bluff: {
      level: "Intermediate 4",
      percentage: "52%",
    },
    diplomacy: {
      level: "Intermediate 6",
      percentage: "73%",
    },
    heal: {
      level: "Intermediate 5",
      percentage: "25%",
    },
    insight: {
      level: "Intermediate 6",
      percentage: "47%",
    },
    math: {
      level: "Beginner 7",
      percentage: "4%",
    },
    nav: {
      level: "Intermediate 2",
      percentage: "39%",
    },
    percept: {
      level: "Intermediate 7",
      percentage: "9%",
    },
    sense: {
      level: "Intermediate 5",
      percentage: "6%",
    },
    walk: {
      level: "Intermediate 7",
      percentage: "16%",
    },
    wind: {
      level: "Beginner 10",
      percentage: "69%",
    },
  },

  {
    chapter_number: 8, display: 'Chapter Sixteen',

    strength: "14.17",
    dexterity: "14.35",
    constitution: "13.64",
    intelligence: "18.56",
    magic: "15.09",
    charisma: "14.27",
    luck: "15.76",


    appraisal: {
      level: "Intermediate 5",
      percentage: "45%",
    },
    athletics: {
      level: "Intermediate 4",
      percentage: "92%",
    },
    bluff: {
      level: "Intermediate 5",
      percentage: "73%",
    },
    diplomacy: {
      level: "Intermediate 7",
      percentage: "46%",
    },
    heal: {
      level: "Intermediate 8",
      percentage: "12%",
    },
    insight: {
      level: "Intermediate 7",
      percentage: "12%",
    },
    math: {
      level: "Beginner 7",
      percentage: "27%",
    },
    nav: {
      level: "Intermediate 4",
      percentage: "9%",
    },
    percept: {
      level: "Intermediate 8",
      percentage: "7%",
    },
    sense: {
      level: "Intermediate 7",
      percentage: "24%",
    },
    walk: {
      level: "Intermediate 7",
      percentage: "72%",
    },
    wind: {
      level: "Intermediate 6",
      percentage: "90%",
    },

  },

  {
    chapter_number: 9, display: 'Chapter Thirty-Three',

    strength: "17.06",
    dexterity: "17.57",
    constitution: "17.39",
    intelligence: "20.72",
    magic: "18.52",
    charisma: "17.22",
    luck: "16.97"
  },

  {
    chapter_number: 10, display: 'Chapter Fourty-Six',

    strength: "18.37",
    dexterity: "18.84",
    constitution: "18.73",
    intelligence: "21.42",
    magic: "19.55",
    charisma: "18.01",
    luck: "17.76"
  },



  {
    chapter_number: 11, display: 'Chapter One',

    strength: "23.63",
    dexterity: "22.78",
    constitution: "23.77",
    intelligence: "24.7",
    magic: "27.12",
    charisma: "21.38",
    luck: "20.83"
  },

  {
    chapter_number: 12, display: 'Chapter Seventeen',

    strength: "24.87",
    dexterity: "24.57",
    constitution: "25.9",
    intelligence: "25.91",
    magic: "29.57",
    charisma: "22.67",
    luck: "23.05"
  },

  {
    chapter_number: 13, display: 'Chapter Twenty-Eight',

    strength: "26.58",
    dexterity: "26.97",
    constitution: "27.73",
    intelligence: "27.76",
    magic: "30.53",
    charisma: "23.48",
    luck: "23.72"
  },

  {
    chapter_number: 14, display: 'Chapter Fourty',

    strength: "27.89",
    dexterity: "28.6",
    constitution: "29.49",
    intelligence: "29.44",
    magic: "32.17",
    charisma: "24.33",
    luck: "24.26"
  },

];





var select = document.getElementById('chapterlist');

// for (var i = 0; i < chapterJson.length; i++) {
//     var option = document.createElement("option");
//     option.value = chapterJson[i]['chapter_number'];
//     option.text = chapterJson[i]['display'];
//     select.appendChild(option);
// }      

var chapter = document.getElementById('chapTitle');
select.onchange = function()
{
    for (var i = 0; i < chapterJson.length; i++) {
        if(chapterJson[i]['chapter_number'] == this.value)
        {

            // input.value = chapterJson[i]['display'];
            // strength.value = chapterJson[i]['strength'];
            // dexterity.value = chapterJson[i]['dexterity'];
            // constitution.value = chapterJson[i]['constitution'];
            // intelligence.value = chapterJson[i]['intelligence'];
            // magic.value = chapterJson[i]['magic'];
            // charisma.value = chapterJson[i]['charisma'];
            // luck.value = chapterJson[i]['luck'];

            // document.querySelector('#appraisalL').textContent = chapterJson[i]['appraisal.level'];
            // document.querySelector('#appraisalP').textContent = chapterJson[i]['appraisalP'];
            // console.log(chapterJson[i].appraisal.level);

            document.querySelector("#chapTitle").textContent = chapterJson[i]['display'];
            document.querySelector("#strength").textContent = chapterJson[i]['strength'];
            document.querySelector("#dexterity").textContent = chapterJson[i]['dexterity'];
            document.querySelector("#constitution").textContent = chapterJson[i]['constitution'];
            document.querySelector("#intelligence").textContent = chapterJson[i]['intelligence'];
            document.querySelector("#magic").textContent = chapterJson[i]['magic'];
            document.querySelector("#charisma").textContent = chapterJson[i]['charisma'];
            document.querySelector("#luck").textContent = chapterJson[i]['luck'];

            document.querySelector('#appraisalL').textContent = chapterJson[i]["appraisal"].level;
            document.querySelector('#appraisalP').textContent = chapterJson[i]["appraisal"].percentage;

            document.querySelector('#athleticsL').textContent = chapterJson[i]["athletics"].level;
            document.querySelector('#athleticsP').textContent = chapterJson[i]['athletics'].percentage;

            document.querySelector('#bluffL').textContent = chapterJson[i]['bluff'].level;
            document.querySelector('#bluffP').textContent = chapterJson[i]['bluff'].percentage;

            document.querySelector('#diplomacyL').textContent = chapterJson[i]['diplomacy'].level;
            document.querySelector('#diplomacyP').textContent = chapterJson[i]['diplomacy'].percentage;

            document.querySelector('#healL').textContent = chapterJson[i]['heal'].level;
            document.querySelector('#healP').textContent = chapterJson[i]['heal'].percentage;

            document.querySelector('#insightL').textContent = chapterJson[i]['insight'].level;
            document.querySelector('#insightP').textContent = chapterJson[i]['insight'].percentage;

            document.querySelector('#mathL').textContent = chapterJson[i]['math'].level;
            document.querySelector('#mathP').textContent = chapterJson[i]['math'].percentage;

            document.querySelector('#navL').textContent = chapterJson[i]['nav'].level;
            document.querySelector('#navP').textContent = chapterJson[i]['nav'].percentage;

            document.querySelector('#perceptL').textContent = chapterJson[i]['percept'].level;
            document.querySelector('#perceptP').textContent = chapterJson[i]['percept'].percentage;

            document.querySelector('#senseL').textContent = chapterJson[i]['sense'].level;
            document.querySelector('#senseP').textContent = chapterJson[i]['sense'].percentage;

            document.querySelector('#walkL').textContent = chapterJson[i]['walk'].level;
            document.querySelector('#walkP').textContent = chapterJson[i]['walk'].percentage;

            document.querySelector('#windL').textContent = chapterJson[i]['wind'].level;
            document.querySelector('#windP').textContent = chapterJson[i]['wind'].percentage;
        }
        if(this.value == '')
        {
          chapter.value = this.value;
        }
    }
    
};