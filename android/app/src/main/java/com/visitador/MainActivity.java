package com.visitador;

//nuevo para splash
import android.os.Bundle; // here

import com.facebook.react.ReactActivity;
//nuevo para splash
import org.devio.rn.splashscreen.SplashScreen; // here

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  // nuevo para splash
  @Override
  protected void onCreate(Bundle savedInstanceState) {
      SplashScreen.show(this);  // here
      super.onCreate(savedInstanceState);
  }
  // nuevo para splash
  @Override
  protected String getMainComponentName() {
    return "Visitador";
  }
}
