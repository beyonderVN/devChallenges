import React, { useLayoutEffect } from "react";

export function LayoutWrap({ children }) {

  return (
    <>
      <style>
        {`
                    *:focus{
                        outline:none
                    }
                  
                    .btn {
                        position: relative;
                      }
                      .btn:before {
                        position: absolute;
                        top: -0.2em;
                        left: -0.2em;
                        right: -0.2em;
                        bottom: -0.2em;
                        content: "";
                        background: currentColor;
                        opacity: 0;
                        border-radius: inherit;
                        transition: opacity 0.15s ease-in;
                      }
                      .btn:hover:before {
                        background: currentColor;
                        opacity: 0.2;
                      }
                      .btn:active:before {
                        transform: scale(1);
                        animation: rubberBand;
                        /* referring directly to the animation's @keyframe declaration */
                        animation-duration: 0.5s;
                      }
                      
                      .btn:focus {
                        outline: none;
                      }
                      @-webkit-keyframes rubberBand {
                        0% {
                            -webkit-transform: scaleX(1);
                            transform: scaleX(1)
                        }
                        30% {
                            -webkit-transform: scale3d(1.25, .75, 1);
                            transform: scale3d(1.25, .75, 1)
                        }
                        40% {
                            -webkit-transform: scale3d(.75, 1.25, 1);
                            transform: scale3d(.75, 1.25, 1)
                        }
                        50% {
                            -webkit-transform: scale3d(1.15, .85, 1);
                            transform: scale3d(1.15, .85, 1)
                        }
                        65% {
                            -webkit-transform: scale3d(.95, 1.05, 1);
                            transform: scale3d(.95, 1.05, 1)
                        }
                        75% {
                            -webkit-transform: scale3d(1.05, .95, 1);
                            transform: scale3d(1.05, .95, 1)
                        }
                        to {
                            -webkit-transform: scaleX(1);
                            transform: scaleX(1)
                        }
                    }
                    
                    @keyframes rubberBand {
                        0% {
                            -webkit-transform: scaleX(1);
                            transform: scaleX(1)
                        }
                        30% {
                            -webkit-transform: scale3d(1.25, .75, 1);
                            transform: scale3d(1.25, .75, 1)
                        }
                        40% {
                            -webkit-transform: scale3d(.75, 1.25, 1);
                            transform: scale3d(.75, 1.25, 1)
                        }
                        50% {
                            -webkit-transform: scale3d(1.15, .85, 1);
                            transform: scale3d(1.15, .85, 1)
                        }
                        65% {
                            -webkit-transform: scale3d(.95, 1.05, 1);
                            transform: scale3d(.95, 1.05, 1)
                        }
                        75% {
                            -webkit-transform: scale3d(1.05, .95, 1);
                            transform: scale3d(1.05, .95, 1)
                        }
                        to {
                            -webkit-transform: scaleX(1);
                            transform: scaleX(1)
                        }
                    }
                    
                    .chat_group_master{
                        --primary:#0090d7;
                        --bg:#1f1f1f;
                        --bg-1:#2a2b2f;
                        --bg-2:#2f3237;
                        --bg-3:#32353a;
                        color:white;
                    }
                    
                    .bg{
                        background:var(--bg)
                    }
                    .bg-1{
                        background:var(--bg-1)
                    }
                    .bg-2{
                        background:var(--bg-2)
                    }
                    .bg-3{
                        background:var(--bg-3)
                    }
                    .bg-primary{
                        background:var(--primary)
                    }
                `}
      </style>
      <div className="chat_group_master w-full h-screen bg-3">
        <div className=" container mx-auto w-full h-full  flex overflow-auto">
          {children}
        </div>
      </div>
    </>
  );
}
