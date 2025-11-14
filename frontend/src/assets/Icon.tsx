export const SVGSprite = () => (
  <svg style={{ display: "none" }} xmlns="http://www.w3.org/2000/svg">
    <defs>
      {/* Delete */}
      <symbol id="delete" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M22 12c0 3.771 0 5.657-1.204 6.828S17.654 20 13.78 20h-2.637c-2.227 0-3.341 0-4.27-.501c-.93-.502-1.52-1.42-2.701-3.259l-.681-1.06C2.497 13.634 2 12.86 2 12s.497-1.634 1.49-3.18l.68-1.06c1.181-1.838 1.771-2.757 2.701-3.259S8.915 4 11.142 4h2.637c3.875 0 5.813 0 7.017 1.172c.671.653.968 1.528 1.1 2.828M15.5 9.5l-5 5m0-5l5 5"
        />
      </symbol>

      {/* Edit */}
      <symbol id="edit" viewBox="0 0 24 24">
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.5"
        >
          <path d="M2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12v-1.5M13.5 2H12C7.286 2 4.929 2 3.464 3.464c-.973.974-1.3 2.343-1.409 4.536" />
          <path d="m16.652 3.455l.649-.649A2.753 2.753 0 0 1 21.194 6.7l-.65.649m-3.892-3.893s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298m-3.893-3.893L10.687 9.42c-.404.404-.606.606-.78.829q-.308.395-.524.848c-.121.255-.211.526-.392 1.068L8.412 13.9m12.133-6.552l-2.983 2.982m-2.982 2.983c-.404.404-.606.606-.829.78a4.6 4.6 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-1.735.579m0 0l-1.123.374a.742.742 0 0 1-.939-.94l.374-1.122m1.688 1.688L8.412 13.9" />
        </g>
      </symbol>

      {/* SearchBox */}
      <symbol id="searchBox" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <path
            strokeLinecap="round"
            d="M14 4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v1M10 4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h3m-3-4H6"
          />
          <circle cx="18" cy="17" r="3" />
          <path strokeLinecap="round" d="m20.5 19.5l1 1M2 10h5m15 0H11" />
        </g>
      </symbol>

      {/* Search */}
      <symbol id="search" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39M11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7"
        />
      </symbol>

      {/* Add */}
      <symbol id="add" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6v12m6-6H6"
        />
      </symbol>

      {/* Check */}
      <symbol id="check" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z"
        />
      </symbol>

      <symbol id="reset" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M4 20v-2h2.75l-.4-.35q-1.225-1.225-1.787-2.662T4 12.05q0-2.775 1.663-4.937T10 4.25v2.1Q8.2 7 7.1 8.563T6 12.05q0 1.125.425 2.188T7.75 16.2l.25.25V14h2v6zm10-.25v-2.1q1.8-.65 2.9-2.212T18 11.95q0-1.125-.425-2.187T16.25 7.8L16 7.55V10h-2V4h6v2h-2.75l.4.35q1.225 1.225 1.788 2.663T20 11.95q0 2.775-1.662 4.938T14 19.75"
        />
      </symbol>
    </defs>
  </svg>
);
