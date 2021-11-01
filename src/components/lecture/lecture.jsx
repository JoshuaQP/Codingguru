import React from 'react'
import "./lecture.css";

function Lecture() {
    return (
        <div className="lecture-container">

            <div className="table">
                <h5>Introduction</h5>
                <table>
                    <ul>
                        <li>  <img src="/img/camera.png" alt="lecture-icon" className="camera-icon"/>   content Mangemant Sysstems (12:20)</li>
                        <li>  <img src="/img/camera.png" alt="lecture-icon" className="camera-icon"/>   content Mangemant Sysstems (12:20)</li>
                        <li>  <img src="/img/camera.png" alt="lecture-icon" className="camera-icon"/>  content Mangemant Sysstems (12:20)</li>
                        <li>  <img src="/img/camera.png" alt="lecture-icon" className="camera-icon"/>   content Mangemant Sysstems (12:20)</li>
                    </ul>
                </table>
                <h5>Introduction</h5>
                <table>
                    <ul>
                        <li>  <img src="/img/camera.png" alt="lecture-icon" className="camera-icon"/>   content Mangemant Sysstems (12:20)</li>
                        <li>  <img src="/img/camera.png" alt="lecture-icon" className="camera-icon"/>   content Mangemant Sysstems (12:20)</li>
                        <li>  <img src="/img/camera.png" alt="lecture-icon" className="camera-icon"/>  content Mangemant Sysstems (12:20)</li>
                        <li>  <img src="/img/camera.png" alt="lecture-icon" className="camera-icon"/>   content Mangemant Sysstems (12:20)</li>
                    </ul>
                </table>
                <h5>Introduction</h5>
                <table>
                    <ul>
                        <li>  <img src="/img/camera.png" alt="lecture-icon" className="camera-icon"/>   content Mangemant Sysstems (12:20)</li>
                        <li>  <img src="/img/camera.png" alt="lecture-icon" className="camera-icon"/>   content Mangemant Sysstems (12:20)</li>
                        <li>  <img src="/img/camera.png" alt="lecture-icon" className="camera-icon"/>  content Mangemant Sysstems (12:20)</li>
                        <li>  <img src="/img/camera.png" alt="lecture-icon" className="camera-icon"/>   content Mangemant Sysstems (12:20)</li>
                    </ul>
                </table>
                <h5>Introduction</h5>
                <table>
                    <ul>
                        <li>  <img src="/img/camera.png" alt="lecture-icon" className="camera-icon"/>   content Mangemant Sysstems (12:20)</li>
                        <li>  <img src="/img/camera.png" alt="lecture-icon" className="camera-icon"/>   content Mangemant Sysstems (12:20)</li>
                        <li>  <img src="/img/camera.png" alt="lecture-icon" className="camera-icon"/>  content Mangemant Sysstems (12:20)</li>
                        <li>  <img src="/img/camera.png" alt="lecture-icon" className="camera-icon"/>   content Mangemant Sysstems (12:20)</li>
                    </ul>
                </table>

            </div>

            <div className="video">
                <div className="header">
                <h1 className="content-header">Javascript Mastery</h1>
                <button className="lecture-btn">Complete and Continue ></button>
                </div>
                <video className="videos" width="750" height="500" controls >
      <source src="https://youtu.be/5HaJPpihkBI" type="video/mp4"/>
      </video>

            </div>
            
        </div>
    )
}

export default Lecture
