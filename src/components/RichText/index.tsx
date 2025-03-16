import React from "react";
import ReactMarkdown from "react-markdown";
import styles from './markdown-styles.module.css';

function RichText({ content }: { content: string }) {
  return (
    <div className={`container mx-auto ${styles.reactMarkDown}`}>
      <ReactMarkdown  >{content}</ReactMarkdown>
    </div>
  );
}

export default RichText;
