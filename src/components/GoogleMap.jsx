export default function GoogleMap() {
  const address = "Buenos Aires, Argentina"

  return (
    <div className="shadow-xl overflow-hidden">
      <div className="w-full h-96 overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.6215688356276!2d-57.57858602363016!3d-38.00858277191386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d94c3b2cb617%3A0x9e42f8a489d9d4df!2sAv.%20Pres.%20Per%C3%B3n%20501%2C%20B7611CEF%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1723971851234!5m2!1ses!2sar"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Black Vinos & Bebidas"
        ></iframe>
      </div>
    </div>
  )
}
