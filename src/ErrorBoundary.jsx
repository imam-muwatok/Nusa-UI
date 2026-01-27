import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Kamu bisa log error ke layanan pelaporan error di sini
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ errorInfo });
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
          {this.state.error && (
            <div className="mb-6 w-full max-w-3xl overflow-auto rounded-lg bg-zinc-100 p-4 text-left font-mono text-sm text-red-600 dark:bg-zinc-900">
              <p className="font-bold mb-2">{this.state.error.toString()}</p>
              {this.state.errorInfo && (
                <pre className="whitespace-pre-wrap text-xs text-zinc-500 dark:text-zinc-400">
                  {this.state.errorInfo.componentStack}
                </pre>
              )}
            </div>
          )}
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