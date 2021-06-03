function NewsCard({ news }) {
  /* Delete the last part of the content "[+XXXX chars]" */
  const newsContent = news.content.slice(0,-13)
  return (
    <div className="container justify-start px-5 py-2 mx-auto ">
      <div className="justify-start w-full p-6 bg-white border rounded-lg shadow-xl m ">
        <div className="flex flex-col items-start py-2 rounded-lg lg:flex-row">
          <div className="flex items-center justify-center w-full lg:justify-start lg:w-1/2">
            <img
              src={news.urlToImage}
              alt="placeholder"
              className="rounded-lg lg:h-60 lg:w-max"
            />
          </div>
          <div className="flex flex-col justify-start w-full text-gray-500 lg:ml-4">
            <h2 className="mt-4 font-semibold tracking-widest text-blue-600 uppercase text lg:mt-0 title-font">
              {news.title}
            </h2>
            <h2 className="mb-3 text-base text-gray-500">
              Source: {news.source.name}
            </h2>
            <p className="mb-6 text-base leading-relaxed text-gray-500">
              {news.description}
            </p>
            <p className="mb-3 text-base text-gray-500"> {newsContent} </p>
            <a
              href={news.url}
              className="text-right text-blue-500 justify-self-end"
            >
              Read more..
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
