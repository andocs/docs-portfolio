import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    // Get references to the cursor elements
    const cursorOuter = document.querySelector('.cursor-outer');
    const cursorInner = document.querySelector('.cursor-inner');

    // Set initial positions
    let outerX = 0, outerY = 0, innerX = 0, innerY = 0;

    // Track mouse movements and update cursor positions
    const handleMouseMove = (e) => {
      // Set the target positions to the mouse coordinates
      outerX = e.clientX;
      outerY = e.clientY;
      innerX = e.clientX;
      innerY = e.clientY;
    };

    // Expand the outer circle when the mouse is pressed down
    const handleMouseDown = () => {
      if (cursorOuter) {
        if (!cursorOuter.classList.contains('invert-colors')) {          
          cursorOuter.style.transform += ' scale(1.5)';
        }
      }
    };

    // Revert the expansion when the mouse button is released
    const handleMouseUp = () => {
      if (cursorOuter) {
        if (!cursorOuter.classList.contains('invert-colors')) {
          cursorOuter.style.transform = cursorOuter.style.transform.replace(' scale(1.5)', '');
        }
      }
    };

    // Invert cursor colors when hovering over a span
    const handleMouseOverSpan = () => {
      if (cursorOuter && cursorInner) {
        cursorOuter.classList.add('invert-colors');
        cursorInner.classList.add('invert-colors');
      }
    };

    // Revert cursor colors when leaving a span
    const handleMouseOutSpan = () => {
      if (cursorOuter && cursorInner) {
        cursorOuter.classList.remove('invert-colors');
        cursorInner.classList.remove('invert-colors');
        cursorOuter.style.transform = cursorOuter.style.transform.replace('scale(1.5)', ''); // Remove scale(2) if present
      }
    };

    // Separate mouse events for spans
    const handleSpanMouseDown = () => {
      cursorOuter.style.transform = cursorOuter.style.transform.replace(' scale(1.5)', ' scale(2.5)'); // Remove scale(1.5) if present
    };

    const handleSpanMouseUp = () => {
      cursorOuter.style.transform = cursorOuter.style.transform.replace(' scale(2.5)', ' scale(1.5)'); // Remove scale(1.5) if present
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Add mouseover, mouseout, mousedown, and mouseup listeners to all spans
    const spans = document.querySelectorAll('span');
    spans.forEach((span) => {
      span.addEventListener('mouseover', handleMouseOverSpan);
      span.addEventListener('mouseout', handleMouseOutSpan);
      span.addEventListener('mousedown', handleSpanMouseDown);
      span.addEventListener('mouseup', handleSpanMouseUp);
    });

    // Animation loop for smooth cursor movement
    function animateCursor() {
      // Gradually move the outer circle towards the target position
      if (cursorOuter) {
        const scaleValue = cursorOuter.classList.contains('invert-colors') ? cursorOuter.style.transform.includes('scale(2.5)') ? ' scale(2.5)' : ' scale(1.5)' : cursorOuter.style.transform.includes('scale(1.5)') ? ' scale(1.5)' : '';
        cursorOuter.style.transform = `translate(${outerX - 20}px, ${outerY - 20}px)${scaleValue}`;
      }

      // Gradually move the inner dot towards the target position
      if (cursorInner) {
        cursorInner.style.transform = `translate(${innerX - 5}px, ${innerY - 5}px)`;
      }

      // Request the next animation frame
      requestAnimationFrame(animateCursor);
    }

    // Start the animation loop
    animateCursor();

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);

      spans.forEach((span) => {
        span.removeEventListener('mouseover', handleMouseOverSpan);
        span.removeEventListener('mouseout', handleMouseOutSpan);
        span.removeEventListener('mousedown', handleSpanMouseDown);
        span.removeEventListener('mouseup', handleSpanMouseUp);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-outer"></div>
      <div className="cursor-inner"></div>
    </>
  );
};

export default CustomCursor;
