import * as React from "react";
import Image from "next/image";
interface ITestimoniProps {}

const Testimoni: React.FunctionComponent<ITestimoniProps> = (props) => {
  return (
    <div>
      <div>
        <div className="flex justify-center gap-10 pt-10 items-center">
          <Image width={100} height={100} src="/jokowi.jpg" alt=""></Image>
          <div>
            <p className="from-neutral-50 font-bold">Joko Widodo</p>
            <p>
              <em>
                &quot; Sangat memuaskan sekali, menarik dan mudah dipahami
                &quot;
              </em>
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-10 pt-10 items-center ml-14">
          <Image width={100} height={100} src="/mega.jpg" alt=""></Image>
          <div>
            <p className="font-bold">Megawati</p>
            <p>
              <em>
                &quot; Wah anak ini kalo tidak ada Purwadhika bakalan gak bisa
                buat ini &quot;
              </em>
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-10 pt-10 items-center">
          <Image
            width={100}
            height={100}
            src="/marsel widiyanto.jpg"
            alt=""
          ></Image>
          <div>
            <p className="font-bold">Marsel Widiyanto</p>
            <p>
              <em>
                &quot; Luar biasa sekali, patut diacungi jempol, risspect
                abangku &quot;
              </em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
