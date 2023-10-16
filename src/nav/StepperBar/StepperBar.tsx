import { Icon } from "@ui/general";
import StepperBarList from "./components/StepperBarList";
import StepperBtnControl from "./components/StepperBtnControl";
import { ArrowLeft, ArrowRigth } from "@ui/icons";
import useStepperBar from "./useStepperBar";

interface IStepperBarProps {
  pages: number;
  initPage: number;
  pagesToShow: number;
  currentPage: number;
  format: "circle" | "number";
  onChange: (page: number) => void;
}

const StepperBar = ({
  pages,
  initPage,
  pagesToShow,
  currentPage,
  format,
  onChange,
}: IStepperBarProps) => {
  const {
    handlePageChange,
    isBackActive,
    isNextActive,
    startPage,
    activePage,
  } = useStepperBar({ pages, initPage, pagesToShow, currentPage, onChange });

  if (pages <= 1) {
    return <></>;
  } else {
    return (
      <div className=" gwk-inline-flex gwk-flex-row gwk-flex-nowrap gwk-items-center gwk-text-text-white gwk-relative gwk-h-6 gwk-mx-36 gwk-justify-center">
        {isBackActive && (
          <StepperBtnControl
            className="gwk-right-[calc(100%+4rem)]"
            onClick={() => handlePageChange(activePage - 1)}
          >
            <Icon elementSrc={ArrowLeft} />
            <span>Atras</span>
          </StepperBtnControl>
        )}

        <StepperBarList
          pages={pages}
          startPage={startPage}
          pagesToShow={pagesToShow}
          activePage={activePage}
          format={format}
          onClick={handlePageChange}
        />

        {isNextActive && (
          <StepperBtnControl
            className="gwk-left-[calc(100%+4rem)]"
            onClick={() => handlePageChange(activePage + 1)}
          >
            <span>Siguiente</span>
            <Icon elementSrc={ArrowRigth} />
          </StepperBtnControl>
        )}
      </div>
    );
  }
};
export default StepperBar;
