import classes from "@/app/loading.module.css";
import NumberTicker from "@/components/ui/number-ticker";
export default function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center lg:mt-60 mt-60">
      {/* <h1 className={classes.loading}>Shiva Shankar Reddy</h1> */}
      <NumberTicker value={100} className={classes.loading} />
      <h2 className={classes.loading}>L o a d i n g...</h2>
    </div>
  );
}
