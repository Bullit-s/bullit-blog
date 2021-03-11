import { MutableRefObject, useEffect } from "react";

const CODE_LETTERS = "01"; //&#*+%?£@§$
const MESSAGES = ["Bullit Blog", "Dmitri Sakali", "Frontend Dev"];

export const useAnimateLogo = (refEl: MutableRefObject<HTMLDivElement>) => {
  const Messenger = function (el: MutableRefObject<HTMLDivElement>) {
    const m = this;

    m.stop = function () {
      m.timerId.length && m.timerId.map((id) => clearTimeout(id));
      m.timerId = [];
    };

    m.init = function () {
      m.codeletters = CODE_LETTERS;
      m.message = 0;
      m.current_length = 0;
      m.fadeBuffer = false;
      m.messages = MESSAGES;
      m.timerId = [];

      const initTimerId = setTimeout(m.animateIn, 100);
      m.timerId.push(initTimerId);
    };

    m.generateRandomString = function (length) {
      let random_text = "";
      while (random_text.length < length) {
        random_text += m.codeletters.charAt(
          Math.floor(Math.random() * m.codeletters.length)
        );
      }
      return random_text;
    };

    m.animateIn = function () {
      if (m.current_length < m.messages[m.message].length) {
        m.current_length = m.current_length + 2;
        if (m.current_length > m.messages[m.message].length) {
          m.current_length = m.messages[m.message].length;
        }

        el.current.innerHTML = m.generateRandomString(
          m.messages[m.message].length
        ); //m.current_length

        const animateInTimerId = setTimeout(m.animateIn, 30);
        m.timerId.push(animateInTimerId);
      } else {
        const animateFadeBufferTimerId = setTimeout(m.animateFadeBuffer, 30);
        m.timerId.push(animateFadeBufferTimerId);
      }
    };

    m.animateFadeBuffer = function () {
      if (m.fadeBuffer === false) {
        m.fadeBuffer = [];
        for (let i = 0; i < m.messages[m.message].length; i++) {
          m.fadeBuffer.push({
            c: Math.floor(Math.random() * 14) + 1,
            l: m.messages[m.message].charAt(i),
          });
        }
      }

      let do_cycles = false;
      let message = "";

      for (let i = 0; i < m.fadeBuffer.length; i++) {
        const fader = m.fadeBuffer[i];
        if (fader.c > 0) {
          do_cycles = true;
          fader.c--;
          message += m.codeletters.charAt(
            Math.floor(Math.random() * m.codeletters.length)
          );
        } else {
          message += fader.l;
        }
      }

      el.current.innerHTML = message;

      if (do_cycles === true) {
        const animateFadeBufferTimerId = setTimeout(m.animateFadeBuffer, 50);
        m.timerId.push(animateFadeBufferTimerId);
      } else {
        const cycleTextTimerId = setTimeout(m.cycleText, 4000);
        m.timerId.push(cycleTextTimerId);
      }
    };

    m.cycleText = function () {
      m.message = m.message + 1;
      if (m.message >= m.messages.length) {
        m.message = 0;
      }

      m.current_length = 0;
      m.fadeBuffer = false;
      el.current.innerHTML = "";

      m.stop();
      const animateInTimerId = setTimeout(m.animateIn, 0);
      m.timerId.push(animateInTimerId);
    };
  };

  useEffect(() => {
    const messenger = new Messenger(refEl);

    if (refEl) {
      messenger.init();
    }
    return () => {
      messenger.stop();
    };
  }, []);
};
