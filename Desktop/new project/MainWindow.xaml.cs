using System.Windows;

namespace new_project
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        // Event handler for Home button click
        private void Home_Click(object sender, RoutedEventArgs e)
        {
            // Handle Home button click logic here
            MessageBox.Show("Home clicked");
        }

        // Event handler for Menu button click
        private void Menu_Click(object sender, RoutedEventArgs e)
        {
            // Handle Menu button click logic here
            MessageBox.Show("Menu clicked");
        }

        // Event handler for Reservation button click
        private void Reservation_Click(object sender, RoutedEventArgs e)
        {
            // Handle Reservation button click logic here
            MessageBox.Show("Reservation clicked");
        }

        // Event handler for Contact Us button click
        private void ContactUs_Click(object sender, RoutedEventArgs e)
        {
            // Handle Contact Us button click logic here
            MessageBox.Show("Contact Us clicked");
        }

        private void MainFrame_Navigated(object sender, System.Windows.Navigation.NavigationEventArgs e)
        {

        }
    }
}
