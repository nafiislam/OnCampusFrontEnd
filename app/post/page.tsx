"use client";
import React from "react";
import { useEdgeStore } from "../../lib/edgestore";
import { MultiImage } from "../components/MultiImage";
import { MultiFile } from "../components/MultiFile";
import { SingleImage } from "../components/SingleImage";
const File = () => {
//files upload
  const [urls, seturls] = React.useState<string[]>([]);
  const getUrls = (urls: string[]) => {
    seturls(urls);
  };
  //images upload
  const [imgurls, setimgurls] = React.useState<string[]>([]);
  const imggetUrls = (urls: string[]) => {
    setimgurls(urls);
  };

  //image upload
  const [imgurl, setimgurl] = React.useState<string>('');
  const imggetUrl = (url: string) => {
    setimgurl(url);
  };

  return (
    <>
      <div>File</div>
      <MultiFile getList={getUrls} />
      {urls.map((url) => (
        <div key={url}>
          <a href={url}>{url}</a>
        </div>
      ))}
      <MultiImage getList={imggetUrls}/>
      {imgurls.map((url) => (
        <div key={url}>
          <a href={url}>{url}</a>
        </div>
      ))}
      <SingleImage getUrl={imggetUrl} />
      {imgurl && (<div key={imgurl}>
          <a href={imgurl}>{imgurl}</a>
        </div>)}
    </>
  );
};

export default File;
