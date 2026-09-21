import "./style.css";
import { loadhome } from "./home";
import { loadmenu } from "./menu";
import { loadcontact } from "./contact";


const homeBtn= document.querySelector("#home-btn");
const menuBtn= document.querySelector("#menu-btn");
const contactBtn= document.querySelector("#contact-btn");

loadhome();
homeBtn.addEventListener("click",loadhome);
menuBtn.addEventListener("click",loadmenu);
contactBtn.addEventListener("click",loadcontact);