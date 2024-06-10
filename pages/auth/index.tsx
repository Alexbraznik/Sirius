import { useRouter } from "next/router";
import { useEffect } from "react";
import { Auth } from "../../src/widgets/auth";
import { useDispatch, useSelector } from "react-redux";
import { resetForm } from "../../src/features/auth/store/authSlice";

interface IFormState {
  auth: {
    form: IData;
  };
}

interface IData {
  Email: string;
  password: string;
}

export default function AuthPage(): JSX.Element {
  const router = useRouter();

  const dispatch = useDispatch();
  const formData = useSelector((state: IFormState) => state.auth.form);

  useEffect(() => {
    if (
      formData &&
      formData.Email === "test@mail.ru" &&
      formData.password === "12345"
    ) {
      router.push("/");
      dispatch(resetForm());
    }
  }, [formData, router, dispatch]);

  return (
    <div>
      <Auth />
    </div>
  );
}
