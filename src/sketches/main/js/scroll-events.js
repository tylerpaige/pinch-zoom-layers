import * as ux from "./interaction-handlers";

const handleIntersections = (scrollResponseMap, entries) => {
  entries.forEach(entry => {
    const responses = scrollResponseMap.get(entry.target);
    if (responses) {
      responses.forEach(response => {
        if (response.condition(entry)) {
          response.handler();
        }
      });
    }
  });
};

const getSentinelTopResponses = block => {
  return [
    {
      condition: entry => {
        return (
          entry.isIntersecting &&
          entry.boundingClientRect.top > window.innerHeight / 2
        );
      },
      handler: () => {
        ux.showPinchHint(block);
      }
    },
    {
      condition: entry => {
        return (
          !entry.isIntersecting &&
          entry.boundingClientRect.top > window.innerHeight / 2
        );
      },
      handler: () => {
        ux.hidePinchHint(block);
      }
    }
  ];
};

const getSentinelBottomResponses = block => {
  return [
    {
      condition : entry => {
        return (
          entry.isIntersecting && entry.boundingClientRect.top < (window.innerHeight / 2)
        )
      },
      handler: () => {
        ux.showPinchHint(block)
      }
    },
    {
      condition : entry => {
        return (
          !entry.isIntersecting && entry.boundingClientRect.top < window.innerHeight / 2
        )
      },
      handler: () => {
        ux.hidePinchHint(block);
      }
    }
  ]
}

const init = blocks => {
  const scrollResponseMap = new Map();
  const observer = new IntersectionObserver(
    handleIntersections.bind(this, scrollResponseMap),
    {
      threshold: [0]
    }
  );
  blocks.forEach(block => {
    const {sentinelTop, sentinelBottom} = block;
    scrollResponseMap.set(sentinelTop, getSentinelTopResponses(block));
    scrollResponseMap.set(sentinelBottom, getSentinelBottomResponses(block));
    observer.observe(sentinelTop);
    observer.observe(sentinelBottom);
  });
};


export {
  init
}