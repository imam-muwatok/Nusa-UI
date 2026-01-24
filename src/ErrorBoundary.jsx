import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Kamu bisa log error ke layanan pelaporan error di sini
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI kustom
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white p-6 text-center text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
          <h2 className="mb-4 text-3xl font-bold text-red-500">Terjadi Kesalahan</h2>
          <p className="mb-6 max-w-md text-zinc-600 dark:text-zinc-400">
            Maaf, aplikasi mengalami error yang tidak terduga. Silakan coba muat ulang halaman.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="rounded-full bg-cyan-600 px-6 py-2 font-semibold text-white transition-all hover:bg-cyan-500"
          >
            Muat Ulang
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;