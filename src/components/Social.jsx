import React from "react"
import { SocialContainer, SocialItem } from "../styleds/Social"

const Social = () => {
  return (
    <SocialContainer className="">
      <SocialItem
        href="https://instagram.com/cga_automation"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
        className="ShareLink__Link-iedr2v-0 kPrcSy ShareLink ShareLink--twitter"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px">
          <g>
            <path d="M67.961 45.288c0 9.919-8.041 17.96-17.96 17.96s-17.96-8.041-17.96-17.96c0-2.795.657-5.43 1.795-7.788H14v42c0 3.85 3.15 7 7 7h58c3.85 0 7-3.15 7-7v-42H66.165a17.848 17.848 0 011.796 7.788zM79 13.5H21c-3.85 0-7 3.15-7 7v14h21.665c3.278-4.349 8.47-7.172 14.335-7.172s11.057 2.823 14.335 7.172H86v-14c0-3.85-3.15-7-7-7zM19.756 31.216H17.15V21.121a4.253 4.253 0 012.607-3.922v14.017zm4.27 0h-2.469V16.868h2.469v14.348zm4.269 0h-2.469V16.868h2.469v14.348zm4.266-10.095V31.216h-2.466V16.868h2.466v4.253zm49.79 5.842a4.252 4.252 0 01-4.251 4.253h-6.909a4.252 4.252 0 01-4.252-4.253v-5.842a4.252 4.252 0 014.252-4.253H78.1a4.251 4.251 0 014.251 4.253v5.842z"></path>
            <path d="M50.001 61.148c8.736 0 15.818-7.085 15.818-15.819 0-8.735-7.081-15.82-15.818-15.82-8.738 0-15.82 7.085-15.82 15.82 0 8.733 7.082 15.819 15.82 15.819zM50 32.725c6.96 0 12.604 5.643 12.604 12.604 0 6.96-5.643 12.604-12.604 12.604S37.396 52.29 37.396 45.329C37.397 38.367 43.04 32.725 50 32.725z"></path>
          </g>
        </svg>
      </SocialItem>
      <SocialItem
        href="https://www.facebook.com/CGA-Automation-SAS-102296184978074/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="ShareLink__Link-iedr2v-0 kPrcSy ShareLink ShareLink--facebook"
      >
        <svg
          version="1.1"
          x="0px"
          y="0px"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          enableBackground="new 0 0 24 24"
          xmlSpace="preserve"
          aria-hidden="true"
        >
          <path d="M18.768,7.465H14.5V5.56c0-0.896,0.594-1.105,1.012-1.105s2.988,0,2.988,0V0.513L14.171,0.5C10.244,0.5,9.5,3.438,9.5,5.32 v2.145h-3v4h3c0,5.212,0,12,0,12h5c0,0,0-6.85,0-12h3.851L18.768,7.465z"></path>
        </svg>
      </SocialItem>
      <SocialItem
        href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2F2020.stateofcss.com&amp;title=Discover the StateOf CSS 2020 rsults&amp;summary="
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="ShareLink__Link-iedr2v-0 kPrcSy ShareLink ShareLink--linkedin"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
        </svg>
      </SocialItem>
      <SocialItem
        href="mailto:?subject=State%20Of%20JavaScript%20Survey%20Results&amp;body=Here%20are%20some%20interesting%20CSS%20survey%20results%3A%20https%3A%2F%2F2020.stateofcss.com"
        target="_self"
        aria-label="Share by email"
        className="ShareLink__Link-iedr2v-0 kPrcSy ShareLink ShareLink--email"
      >
        <svg
          version="1.1"
          x="0px"
          y="0px"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          enableBackground="new 0 0 24 24"
          xmlSpace="preserve"
          aria-hidden="true"
        >
          <path d="M22,4H2C0.897,4,0,4.897,0,6v12c0,1.103,0.897,2,2,2h20c1.103,0,2-0.897,2-2V6C24,4.897,23.103,4,22,4z M7.248,14.434 l-3.5,2C3.67,16.479,3.584,16.5,3.5,16.5c-0.174,0-0.342-0.09-0.435-0.252c-0.137-0.239-0.054-0.545,0.186-0.682l3.5-2 c0.24-0.137,0.545-0.054,0.682,0.186C7.571,13.992,7.488,14.297,7.248,14.434z M12,14.5c-0.094,0-0.189-0.026-0.271-0.08l-8.5-5.5 C2.997,8.77,2.93,8.46,3.081,8.229c0.15-0.23,0.459-0.298,0.691-0.147L12,13.405l8.229-5.324c0.232-0.15,0.542-0.084,0.691,0.147 c0.15,0.232,0.083,0.542-0.148,0.691l-8.5,5.5C12.189,14.474,12.095,14.5,12,14.5z M20.934,16.248 C20.842,16.41,20.673,16.5,20.5,16.5c-0.084,0-0.169-0.021-0.248-0.065l-3.5-2c-0.24-0.137-0.323-0.442-0.186-0.682 s0.443-0.322,0.682-0.186l3.5,2C20.988,15.703,21.071,16.009,20.934,16.248z"></path>
        </svg>
      </SocialItem>
    </SocialContainer>
  )
}

export default Social
