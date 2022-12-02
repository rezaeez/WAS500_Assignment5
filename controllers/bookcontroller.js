const express = require('express');


const mongoose = require("mongoose");

let schema = require('../models/books' );
 
mongoose.connect( `mongodb+srv://webassignment:12345@cluster0.rpwrmyk.mongodb.net/webassignment5?retryWrites=true&w=majority`).then((ans) => {
    console.log("Connected Successfully")
}).catch((err) => {
    console.log("Error in the Connection")
})

// Calling Schema class
const Schema = mongoose.Schema;

// Creating Structure of the collection
const collection_structure = new Schema(schema );

// Creating collection
const books = mongoose.model("books", collection_structure );
const path = require('path');
const ejs = require('ejs');
const bodyparser = require('body-parser'); 
let resultbooks=[];
const app=express();
app.set('view engine' , 'ejs');
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

module.exports = {
    home:(req, res)=>{
        res.render( "../views/index.ejs");
    },
    contact:(req, res)=>{
        res.render( "../views/contact.ejs");
    },
    survey:(req, res)=>{
        res.render( "../views/survey.ejs");
    },
    honesty:(req, res)=>{
        res.render( "../views/honesty.ejs");
    }, 
    allbooks:(req, res)=>{
          
           var  query= books.find({}); 
            query.exec(function (err, book) {
                if (err) return handleError(err); 
                console.log( book);
                
                res.render( "../views/booklist.ejs" , {characters:book});
            });
         
    },
    
    bookdetail:async (req, res)=>{ 
        let id = [req.query.id || []].flat(); 
           var  query= books.find({_id: id}); 
           query.exec(function (err, book) {
            if (err) return handleError(err); 
            //console.log(book);
            res.render( "../views/book.ejs" , {characters:book});
          }); 
          
        
    },
    errorpage:async (req, res)=>{ 
         
            res.render( "../views/page_404.ejs"  );
           
    },
    addbook:async (req,res)=>{
        try{
      
        const bookmodel1 = new  books({

            name:"Programming Persistent Memory",
            author_name:"Steve Scargall",
            description:"Beginning and experienced programmers will use this comprehensive guide to persistent memory programming. You will understand how persistent memory brings together several new software/hardware requirements, and offers great promise for better performance and faster application startup times - a huge leap forward in byte-addressable capacity compared with current DRAM offerings.This revolutionary new technology gives applications significant performance and capacity improvements over existing technologies. It requires a new way of thinking and developing, which makes this highly disruptive to the IT/computing industry. The full spectrum of industry sectors that will benefit from this technology include, but are not limited to, in-memory and traditional databases, AI, analytics, HPC, virtualization, and big data.",
            image:"1100-programming-persistent-memory.jpg",
        });
        const result = await  bookmodel1.save();
        const bookmodel2 = new  books({

            name:"Demystifying Internet of Things Security",
            author_name:"SSunil Cheruvu, Anil Kumar, Ned Smith, David M. Wheeler",
            description:"Break down the misconceptions of the Internet of Things by examining the different security building blocks available in Intel Architecture (IA) based IoT platforms. This book reviews the threat pyramid, secure boot, chain of trust, and the SW stack leading up to defense-in-depth.The IoT presents unique challenges in implementing security and Intel has both CPU and Isolated Security Engine capabilities to simplify it. This book explores the challenges to secure these devices to make them immune to different threats originating from within and outside the network. The requirements and robustness rules to protect the assets vary greatly and there is no single blanket solution approach to implement security.Demystifying Internet of Things Security provides clarity to industry professionals and provides and overview of different security solutions",
            image:"1099-demystifying-internet-of-things-security.jpg",
        });
        const result1 = await  bookmodel2.save();
        const bookmodel3 = new  books({

            name:"API Traffic Management 101",
            author_name:"Mike Amundsen",
            description:"The aim of this short book is to introduce the general themes, challenges, and opportunities in the world of managing API traffic. Most of the examples and recommendations come from my own experience (or that of colleagues) while working with customers, ranging from small local startups to global enterprises.This book is for those just getting started in API traffic management as well as those who have experience and want to review the basics and take your work to the next level. Developers who are responsible for creating and maintaining APIs will learn how network admins and those charged with enabling API traffic collection identify and track key API activity. And admins who design and maintain API traffic metrics can learn how to align and enrich traffic collection to support and inform API developers.",
            image:"1098-api-traffic-management-101.jpg",
        });
        const result2 = await  bookmodel3.save();
    }catch(error){
       
       res.send(error.message);
    }

    }
}