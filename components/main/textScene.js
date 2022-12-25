import { useScroll, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useRefs from "react-use-refs";

const TextScene = ({ router }) => {
  const scroll = useScroll();

  const [
    scrollNotice,
    firstText,
    secondText,
    thirdText,
    fourthText,
    fifthText,
    percent,
    routerCheck,
  ] = useRefs();

  // scroll animation
  useFrame(() => {
    /**
     * scene 1
     */
    const start = scroll.visible(0.1 / 12, 11.9 / 12);
    const b = scroll.visible(0.7 / 12, 1.4 / 12);

    scrollNotice.current?.classList.toggle("out", start);
    firstText.current?.classList.toggle("show", b);

    /**
     * scene 2
     */
    const c = scroll.visible(3.6 / 12, 1 / 12);
    secondText.current?.classList.toggle("show", c);

    /**
     * scene 3
     */
    const d = scroll.visible(5.6 / 12, 1 / 12);
    thirdText.current?.classList.toggle("show", d);

    /**
     * scene 4
     */
    const e = scroll.visible(8.6 / 12, 1 / 12);
    fourthText.current?.classList.toggle("show", e);

    /**
     * scene 5
     */
    const f = scroll.visible(10.6 / 12, 1.4 / 12);
    fifthText.current?.classList.toggle("show", f);

    /**
     * scene 6
     */
    const gRange = scroll.range(10.6 / 12, 1.3 / 12);
    const g = scroll.visible(10.6 / 12, 1.4 / 12);

    if (gRange === 1) {
      if (routerCheck.current === 1) return;
      router.push("/work");
      routerCheck.current = 1;
      if (routerCheck.current === 1) return;
    }

    percent.current?.classList.toggle("percent", g);
    const floor = Math.floor(gRange * 100);

    g && percent.current && (percent.current.textContent = `to next ${floor}`);
  });

  return (
    <group>
      <Html className="text_wrap">
        <div className="scroll_noti" ref={scrollNotice}>
          Scroll down slowly
        </div>
        <div className="text" ref={firstText}>
          Life is a series of dots called &quot;experiences&quot;.
        </div>
        <div className="text" ref={secondText}>
          Each and every event in the past <br className="mobile_text" />
          is connected to the present
          <br />
          as if a dot begins to move and becomes a line.
          {/* as if a dot begins to move and forms a connected line. */}
        </div>
        <div className="text" ref={thirdText}>
          The dots are all connected to one another
          <br />
          and make me who I am today.
        </div>
        <div className="text" ref={fourthText}>
          I look forward to having you <br className="mobile_text" />
          as a shining dot in my life.
        </div>
        <div className="text" ref={fifthText}>
          I&apos;ll provide a solution <br className="mobile_text" />
          to satisfy everyone with creativity.
        </div>
        <div className="hide percent" ref={percent}></div>
      </Html>
    </group>
  );
};

export default TextScene;
