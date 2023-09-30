import { proxy } from "valtio";
//This is basically we will define here that we can use it any where in our whole file
//this is the texture of shirt before we apply changes or texture of shirt that will be shown at start
//default val

const state = proxy({
   intro : true, //when we allowed to show shirt image
   color : '#EPBD48',
   isLogoTexture : true ,
   isFullTexture : false,
   logoDecal : './threejs.png', //threejs logo
   fullDecal : './threejs.png',
});

export default state;