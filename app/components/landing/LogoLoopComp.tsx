import LogoLoop from '@/components/LogoLoop'

// interface ImageLogos {
//   src: string;
//   alt: string;
//   width: number;
//   height: number
// }

// interface LogoLoopProps {
//   logos: ImageLogos[];
//   speed?: number;
//   direction?: "left" | "right";
//   logoHeight?: number;
//   gap?: number;
//   hoverSpeed?: number;
//   scaleOnHover?: boolean;
//   fadeOut?: boolean;
//   fadeOutColor?: string;
//   ariaLabel?: string;
// }

const imageLogos = [
  { src: "/nextjs.png", alt: "Company 1",  width: 48, height: 48 },
  { src: "/mongoDB.png", alt: "Company 2", width: 48, height: 48 },
  { src: "/stripe_logo.png", alt: "Company 3", width: 48, height: 48 },
];

export default function LogoLoopComp(){
  return (
    <div style={{ height: '200px',  position: 'relative', overflow: 'hidden',}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={imageLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="transparent"
        ariaLabel="Technology partners"
      />
    </div>
  )
}