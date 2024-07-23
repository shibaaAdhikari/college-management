// import React, { useState, useRef, useEffect } from 'react';
// import Webcam from 'react-webcam';
// import 'bootstrap//dist/css/bootstrap.min.css'

// const Login = () => {
//     const [capturedImage, setCapturedImage] = useState(null);
//     const webcamRef = useRef(null);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             capture();
//         }, 5000);

//         return () => clearTimeout(timer); 
//     }, []);

//     const capture = () => {
//         const imageSrc = webcamRef.current.getScreenshot();
//         setCapturedImage(imageSrc);
//     };

//     return (
//         <div className="container mt-5">
//             <div className="row justify-content-center">
//                 <div className="col-md-12">
//                     <div className="card">
//                         <div className="card-header bg-primary text-white">
//                             <h3 className="card-title">User Registration</h3>
//                         </div>
//                         <div className="card-body">
//                             {!capturedImage ? (
//                                 <>
//                                     <div className="form-group">
//                                         <label htmlFor="name">Enter your name</label>
//                                         <input
//                                             type="text"
//                                             name="name"
//                                             id="name"
//                                             className="form-control"
//                                         />
//                                     </div>
//                                     <div className="form-group">
//                                         <Webcam
//                                             audio={false}
//                                             ref={webcamRef}
//                                             screenshotFormat="image/jpeg"
//                                             width="100%"
//                                             className="border mt-3"
//                                         />
//                                         <p className="text-center mt-3">Taking picture in 5 seconds...</p>
//                                     </div>
//                                 </>
//                             ) : (
//                                 <div>
//                                     <div className="details text-center">
//                                         <h5 className="mt-3">Hello!</h5>
//                                         <p>
//                                             Your registration is successfully completed. Now you may
//                                             proceed to login.
//                                         </p>
//                                         <img
//                                             src={capturedImage}
//                                             alt="Captured"
//                                             className="img-thumbnail mt-3"
//                                         />
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;
