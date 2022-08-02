import { TransitEnterexitSharp } from "@material-ui/icons";

const hideShape = document.querySelector("headerScroll");
const sectionOne = document.querySelector("#shape");
const sectionOneOptions = {};
const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
    entries.forEach(entry =>{
        console.log('entry.target')
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
