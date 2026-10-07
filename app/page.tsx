const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=13.159478303269635%2C123.72196217620163&travelmode=driving";

const WHATSAPP_LINK = "#";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">LOT FOR SALE</p>
            <h1>Titled Lots for Sale in Tagas, Daraga, Albay</h1>
            <p className="lead">
              A well-located property in Daraga with convenient access, nearby
              establishments, and a very near view of Mayon Volcano.
            </p>

            <div className="priceBox">
              <span>Asking Price</span>
              <strong>₱20,000 per sq meter</strong>
            </div>

            <div className="heroActions">
              <a
                className="button primary"
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </a>
              <a className="button secondary" href="#contact">
                Contact Jill Mabini
              </a>
            </div>

            <p className="locationNote">
              Exact title copies, technical descriptions, and additional property
              documents are available upon legitimate inquiry.
            </p>
          </div>

          <div className="heroImageCard">
            <img
              src="/lot-photo-1.png"
              alt="Front view of the lot for sale in Tagas, Daraga, Albay"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeading">
            <p className="eyebrow">PROPERTY SNAPSHOT</p>
            <h2>Key details at a glance</h2>
          </div>

          <div className="cards">
            <article className="card">
              <span>Location</span>
              <strong>Tagas, Daraga, Albay</strong>
            </article>
            <article className="card">
              <span>Property Type</span>
              <strong>Lot / Land</strong>
            </article>
            <article className="card">
              <span>Ownership</span>
              <strong>Two titled lots</strong>
            </article>
            <article className="card">
              <span>Price</span>
              <strong>₱20,000 / sq m</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="sectionHeading">
            <p className="eyebrow">PHOTO GALLERY</p>
            <h2>Property and nearby view</h2>
          </div>

          <div className="galleryGrid">
            <figure className="galleryCard galleryLarge">
              <img
                src="/lot-photo-1.png"
                alt="Lot photo showing the greenery and nipa hut on the property"
              />
              <figcaption>Main property view</figcaption>
            </figure>

            <figure className="galleryCard">
              <img
                src="/lot-photo-2.png"
                alt="Wider property photo showing the open frontage and surrounding greenery"
              />
              <figcaption>Wider lot view</figcaption>
            </figure>

            <figure className="galleryCard">
              <img
                src="/mayon-view.png"
                alt="Nearby street view with Mayon Volcano visible in the area"
              />
              <figcaption>Nearby view of Mayon Volcano</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeading">
            <p className="eyebrow">WHY THIS PROPERTY STANDS OUT</p>
            <h2>Practical, accessible, and marketable</h2>
          </div>

          <div className="featureList">
            <div>
              <strong>Good location</strong>
              <p>
                Located in Tagas, Daraga, Albay with accessible road approach
                and nearby daily essentials.
              </p>
            </div>
            <div>
              <strong>Titled property</strong>
              <p>
                Two titled lots are available. Supporting documents can be shared
                with serious buyers upon request.
              </p>
            </div>
            <div>
              <strong>Appealing surroundings</strong>
              <p>
                The area has lush greenery and a nearby view of Mayon Volcano,
                which adds to the character of the location.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container twoCol">
          <div>
            <p className="eyebrow">LOCATION GUIDE</p>
            <h2>Easy to locate in Daraga</h2>
            <p>
              Use the map and directions button as a general guide to the
              property location. This is ideal for interested buyers who want to
              check the area first before scheduling a visit.
            </p>
            <div className="heroActions">
              <a
                className="button primary"
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
              >
                Open Google Maps Directions
              </a>
            </div>
            <p className="smallPrint">
              For safety and privacy, this page does not publish the full
              technical description or all sensitive title information.
            </p>
          </div>

          <figure className="mapCard">
            <img
              src="/vicinity-map.png"
              alt="Satellite vicinity map of the property area in Daraga, Albay"
            />
            <figcaption>
              Vicinity map for reference only. Exact boundaries should be
              verified against official documents and survey records.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container documentBox">
          <div>
            <p className="eyebrow">PROPERTY DOCUMENTS</p>
            <h2>Available upon request</h2>
          </div>
          <p>
            The property is supported by title documents. For privacy and
            security, full copies of the titles and detailed technical
            descriptions are not displayed publicly on this landing page, but
            they may be shared with legitimate interested buyers.
          </p>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="container contactBox">
          <div>
            <p className="eyebrow">INTERESTED IN THIS PROPERTY?</p>
            <h2>Get in touch with Jill Mabini</h2>
            <p>
              For price discussion, site visit arrangements, exact lot details,
              and document requests, you may contact Jill Mabini directly.
            </p>
          </div>

          <div className="contactPanel">
            <div className="contactInfo">
              <span>Contact Person</span>
              <strong>Jill Mabini</strong>
            </div>
            <div className="contactActions">
              <a className="button primary" href={WHATSAPP_LINK}>
                WhatsApp Link to be Added
              </a>
              <a
                className="button secondary"
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </a>
            </div>
            <p className="smallPrint">
              Replace the WhatsApp link in the code once the final WhatsApp link
              is ready.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footerGrid">
          <p>Titled Lots for Sale in Tagas, Daraga, Albay</p>
          <p className="smallPrint">
            Information on this page is for marketing and reference purposes.
            All buyers should verify boundaries, measurements, title status, and
            other legal matters through the proper documents and due diligence.
          </p>
        </div>
      </footer>
    </main>
  );
}
