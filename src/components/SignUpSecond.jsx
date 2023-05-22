import { Formik, Form, Field, ErrorMessage } from "formik";

export default function SignUpSecond() {
  const initialValues = {
    username: "",
    email: "",
    description: "",
    password1: "",
    password2: "",
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Code à éxécuter à la soumission du formulaire

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
        {({ handleSubmit, isSubmitting, handleReset }) => (
          <Form onSubmit={handleSubmit}>
            {/* Input username */}
            <Field type="text" name="username" placeholder="username" />

            {/* Input email */}
            <Field type="email" name="email" placeholder="email" />
            
            {/* Gestion message d'erreur pour l'input email */}
            <ErrorMessage name="email" component="div" />

            {/* Textarea description */}
            <Field name="description" as="textarea" rows={20} cols={30} />

            {/* Input password1 */}
            <Field type="password" name="password1" placeholder="password" />

            <Field type="password" name="password2" placeholder="confirm password" />

            {/* Gestion message d'erreur pour l'input password2 */}
            <ErrorMessage name="password2" component="div" />

                                {/* 👇 boutton désactivé pendant l'exécution de onSubmit */}
            <button type="submit" disabled={isSubmitting}>
            Submit
            </button>

            {/* On peut ajouter un bouton pour réinitialiser les champs à leurs valeurs initiales*/}
            <button onClick={handleReset}>reset</button>

            {/* On peut ajouter un loader pendant l'éxécution de onSubmit */}
            {isSubmitting && <div>Loader ...</div>}
            </Form>
            )}
            </Formik>
        </main>
    );
}
