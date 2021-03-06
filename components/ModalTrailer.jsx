const ModalTrailer = ({ isOpen, closeModal, idTrailer }) => {
  return (
    <>
      {isOpen && (
        <div
          pos="fixed top-0 left-0 right-0 bottom-0"
          text="white"
          bg="gray-900 opacity-80"
          className="slide-in-fwd-center flex items-center justify-center"
          onClick={() => closeModal(false)}
        >
          <div w="full" max-w="5xl" p="<lg:x-6">
            <div className="embed-container shadow-xl">
              <iframe
                src={`https://www.youtube.com/embed/${idTrailer}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded md:rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalTrailer;
