import  { useState, useEffect } from "react";
import React from 'react'
import {useDispatch} from "react-redux"
import { useSelector } from 'react-redux'
import {logout,selectUser } from "../features/userSlice"
import axios from 'axios';
import "./Logout.css"


const Logout = () => {

  const [news, setNews] = useState([]);
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  const handellogout =(e) =>{
    e.preventDefault();

    
    dispatch(logout());
  }


  useEffect(() => {
    const loadNews = async () => {
        const response = await axios.get("https://newsdata.io/api/1/news?apikey=pub_900798d950e9338c71a8d1a30ef6878b6a62&country=au,be,es,ae,us&language=en&category=sports  ");

        setNews(response.data.results);
    };

    loadNews();
}, []);

  return (
    <div>
        <h1 class=" m-3">Welcom <span>{user.name}</span></h1>
        <button class="btn btn-secondary m-3" onClick={(e) => handellogout(e)}>Logout</button>

        <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


        {/* <div className='container con-div' >
                <div className='row'>
                    <div className='col-md-9 col-sm-9 '>
                        <div className="container sport" style={{ width: '80%' }}>
                            <div class="line ">
                                <h1>Sport's News</h1>
                            </div>
                            {news && news.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div class="row">
                                            <article class="col-md-12 article-list">
                                                {item.image_url && (
                                                    <div class="inner">
                                                        <figure>
                                                            <a href="single.html">
                                                                <img src={item.image_url} alt="Sample Article" style={{width:"59%"}} />
                                                            </a>
                                                        </figure>
                                                        <div class="details">
                                                            <div class="detail">
                                                                <div class="category">
                                                                    <a href="#">Sport</a>
                                                                </div>
                                                                <div class="time">{item.pubDate}</div>
                                                             
                                                            </div>
                                                            <h1><a href="single.html">{item.title} </a></h1>
                                                            <p>
                                                                {item.description}
                                                            </p>
                                                            <footer>
                                                                <a class="btn btn-primary more" href={item.link}>
                                                                    <div>More</div>
                                                                    <div><i class="ion-ios-arrow-thin-right"></i></div>
                                                                </a>
                                                            </footer>
                                                        </div>
                                                    </div>
                                                )}
                                            </article>

                                        </div>
                                        <br />

                                    </div>


                                )

                            })}
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-3 '>
                    
                    </div>
                </div>
            </div> */}

    </div>
  )
}

export default Logout