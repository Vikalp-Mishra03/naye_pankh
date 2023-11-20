// import React, { useState } from 'react';
// import '../style/feedback.scss';
// import { SiWechat } from 'react-icons/si'
// import { RxCross2 } from 'react-icons/rx'

// export default function Feedback() {
//     const [selectedIcon, setSelectedIcon] = useState(null);
//     const [submitted, setSubmitted] = useState(false);
//     const [showFeedbackSection, setShowFeedbackSection] = useState(false);

//     const handleSendReview = () => {
//         if (selectedIcon !== null) {
//             setSubmitted(true);
//         }
//     };

//     const handleBackButtonClick = () => {
//         setShowFeedbackSection(false);
//         setSubmitted(false);
//     };

//     const toggleFeedbackSection = () => {
//         setShowFeedbackSection(!showFeedbackSection);
//         setSubmitted(false);
//         setSelectedIcon(null);
//     };

//     return (
//         <div className='body'>
//             <section className='feedback-section'>
//                 {!showFeedbackSection && (
//                     <div className='toggle-feedback-button'>
//                         <SiWechat onClick={toggleFeedbackSection} />
//                     </div>
//                 )}

//                 {showFeedbackSection && (
//                     <>
//                         <h2>How satisfied are you with our services?</h2>
//                         <div className='rating'>
//                             <div
//                                 className={`child unhappy ${selectedIcon === 'Unhappy' ? 'active' : ''}`}
//                                 onClick={() => setSelectedIcon('Unhappy')}
//                             >
//                                 <p>🥲</p>
//                                 <h3>Unhappy</h3>
//                             </div>
//                             {/* Add other emoji components similarly */}
//                             <div
//                                 className={`child satisfied ${selectedIcon === 'Satisfied' ? 'active' : ''}`}
//                                 onClick={() => setSelectedIcon('Satisfied')}
//                             >
//                                 <p>😊</p>
//                                 <h3>Satisfied</h3>
//                             </div>
//                             <div
//                                 className={`child very-happy ${selectedIcon === 'Very Happy' ? 'active' : ''}`}
//                                 onClick={() => setSelectedIcon('Very Happy')}
//                             >
//                                 <p>😁</p>
//                                 <h3>Very Happy</h3>
//                             </div>
//                         </div>
//                         <div className='feedback-btn'>
//                             <button onClick={handleSendReview}>Send Review</button>
//                         </div>

//                         {submitted && (
//                             <div className='response-screen'>
//                                 <p>{selectedIcon}</p>
//                                 <h3>Your Feedback: {selectedIcon}</h3>
//                                 <p>💖 Thank You for your response</p>
//                                 <div className='feedback-button'>
//                                     <button onClick={handleBackButtonClick}>Back</button>
//                                 </div>
//                             </div>
//                         )}

//                         <div className='toggle-feedback-cross'>
//                            <RxCross2  onClick={toggleFeedbackSection}/>
//                         </div>
//                     </>
//                 )}
//             </section>
//         </div>
//     );
// }



import React, { useState } from 'react';
import '../style/feedback.scss';
import { SiWechat } from 'react-icons/si';
import { RxCross2 } from 'react-icons/rx';

export default function Feedback() {
    const [selectedIcon, setSelectedIcon] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [showFeedbackSection, setShowFeedbackSection] = useState(false);

    const handleSendReview = () => {
        if (selectedIcon !== null) {
            setSubmitted(true);
            setShowFeedbackSection(false); // Hide the rating section after sending review
        }
    };

    const handleBackButtonClick = () => {
        setShowFeedbackSection(false);
        setSubmitted(false);
    };

    const toggleFeedbackSection = () => {
        setShowFeedbackSection(!showFeedbackSection);
        setSubmitted(false);
        setSelectedIcon(null);
    };

    return (
        <div className='body'>
            <section className='feedback-section'>
                {!showFeedbackSection && (
                    <div className='toggle-feedback-button'>
                        <SiWechat onClick={toggleFeedbackSection} />
                    </div>
                )}

                {showFeedbackSection && !submitted && (
                    <>
                        <h2>How satisfied are you with our services?</h2>
                       
                        <div className='rating'>
                             <div
                                 className={`child unhappy ${selectedIcon === 'Unhappy' ? 'active' : ''}`}
                                 onClick={() => setSelectedIcon('Unhappy')}
                             >
                                 <p>🥲</p>
                                 <h3>Unhappy</h3>
                             </div>
                             
                             <div
                                 className={`child satisfied ${selectedIcon === 'Satisfied' ? 'active' : ''}`}
                                 onClick={() => setSelectedIcon('Satisfied')}
                             >
                                 <p>😊</p>
                                 <h3>Satisfied</h3>
                             </div>
                             <div
                                 className={`child happy ${selectedIcon === 'Very Happy' ? 'active' : ''}`}
                                 onClick={() => setSelectedIcon('Very Happy')}
                             >
                                 <p>😁</p>
                                 <h3>Very Happy</h3>
                             </div>
                         </div>
                       
                        <div className='feedback-btn'>
                            <button className='button2' onClick={handleSendReview}>Send Review</button>
                        </div>
                    </>
                )}

                {submitted && (
                    <div className='response-screen'>
                        {/* Display submitted feedback */}
                        <p>{selectedIcon}</p>
                        <h3>Your Feedback: {selectedIcon}</h3>
                        <p>💖 Thank You for your response</p>
                        <div className='feedback-button'>
                            <button className='button1' onClick={handleBackButtonClick}>Back</button>
                        </div>
                    </div>
                )}

                {showFeedbackSection && (
                    <div className='toggle-feedback-cross'>
                        <RxCross2 onClick={toggleFeedbackSection} />
                    </div>
                )}
            </section>
        </div>
    );
}
