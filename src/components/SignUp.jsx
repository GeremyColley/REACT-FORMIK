import { Formik } from "formik";

export default function SignUp() {

  const initialValues = {
    username: "",
    email: "",
    description: "",
    password1: "",
    password2: "",
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Code à éxécuter à la soumission du formulaire
    console.log("Saisie => " + values.name);
    // Réinitialise les champs à leurs valeurs initiales
    resetForm({
      values: initialValues,
    });

    // Indique que la soumission du formulaire est finie
    setSubmitting(false);
  };

  return (
    <main >
      <h1>Sign Up</h1>

      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          //   Est ce que les mots de passe sont identiques ?
          if (values.password1 !== values.password2) {
            errors.password2 = "Password unidentical";
          }

          return errors;
        }}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions);
        }}
      >
        {({
          values,
          errors,
          touched, 
          handleChange,
          handleBlur, // garde trace si l'input a été visité ou non
          handleSubmit,
          isSubmitting,
          handleReset,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur} // onBlur se déclenche lorsque l'input perd le focus
              value={values.username}
              placeholder="username"
            />

            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="email"
            />
            {/* S'il y a une erreur pour email et que l'input email a été visité, alors on affiche l'erreur de email */}
            {errors.email && touched.email && errors.email}
            <textarea name="description" cols="30" rows="10"></textarea>

            <input
                type="password"
                name="password1"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password1}
                placeholder="password"
            />

            <input
                type="password"
                name="password2"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password2}
                placeholder="confirm password"
            />
            {/* S'il y a une erreur pour password2 et que l'input password2 a été visité, alors on affiche l'erreur de password2 */}
            {errors.password2 && touched.password2 && errors.password2}

            {/* 👇 boutton désactivé pendant l'exécution de onSubmit() */}
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>

            {/* On peut ajouter un bouton pour réinitialiser les champs à leurs valeurs initiales */}
            <button onClick={handleReset}>reset</button>

            {/* On peut ajouter un loader pendant l'éxécution de onSubmit */}
            {isSubmitting && <div>Loader ...</div>}
            </form>
            )}
            </Formik>
        </main>
    );
}
