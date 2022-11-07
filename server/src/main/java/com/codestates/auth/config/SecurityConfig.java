package com.codestates.auth.config;

import static org.springframework.security.config.Customizer.withDefaults;

import java.util.Arrays;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.codestates.auth.JwtTokenizer;
import com.codestates.auth.filter.JwtAuthenticationFilter;
import com.codestates.auth.filter.JwtVerificationFilter;
import com.codestates.auth.handler.UserAccessDeniedHandler;
import com.codestates.auth.handler.UserAuthenticationEntryPoint;
import com.codestates.auth.handler.UserAuthenticationFailureHandler;
import com.codestates.auth.handler.UserAuthenticationSuccessHandler;
import com.codestates.auth.utils.CustomAuthorityUtils;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity(debug = true)
@RequiredArgsConstructor
public class SecurityConfig {

	private final JwtTokenizer jwtTokenizer;
	private final CustomAuthorityUtils authorityUtils;

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			.headers().frameOptions().sameOrigin()
			.and()
			.csrf().disable()
			.cors(withDefaults())
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
			.and()
			.formLogin().disable()
			.httpBasic().disable()
			.exceptionHandling()
			.authenticationEntryPoint(new UserAuthenticationEntryPoint())
			.accessDeniedHandler(new UserAccessDeniedHandler())
			.and()
			.apply(new CustomFilterConfigurer())
			.and()
			.authorizeHttpRequests(authorize -> authorize
				.antMatchers(HttpMethod.OPTIONS).permitAll()
				// .antMatchers(HttpMethod.POST, "/signup").permitAll()
				// .antMatchers(HttpMethod.PATCH, "/users/**").hasRole("USER")
				// .antMatchers(HttpMethod.GET, "/users/**").hasRole("USER")
				// .antMatchers(HttpMethod.DELETE, "/users/**").hasRole("USER")
				// .antMatchers(HttpMethod.POST, "/questions/ask").hasRole("USER")
				// .antMatchers(HttpMethod.PATCH, "/questions/**").hasRole("USER")
				// .antMatchers(HttpMethod.GET, "/questions").permitAll()
				// .antMatchers(HttpMethod.GET, "/questions/**").permitAll()
				// .antMatchers(HttpMethod.DELETE, "/questions/**").hasRole("USER")
				// .antMatchers(HttpMethod.POST, "/**/answers").hasRole("USER")
				// .antMatchers(HttpMethod.PATCH, "/**/answers/*").hasRole("USER")
				// .antMatchers(HttpMethod.DELETE, "/**/answers/*").hasRole("USER")
				// .antMatchers(HttpMethod.POST, "/**/comments").hasRole("USER")
				// .antMatchers(HttpMethod.PATCH, "/**/comments/*").hasRole("USER")
				// .antMatchers(HttpMethod.DELETE, "/**/comments/*").hasRole("USER")
				.anyRequest().permitAll());
		return http.build();
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return PasswordEncoderFactories.createDelegatingPasswordEncoder();
	}

	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();
		configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PATCH", "DELETE", "OPTIONS"));
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		configuration.addAllowedHeader("*");
		configuration.addExposedHeader("Authorization");
		configuration.addExposedHeader("Refresh");
		configuration.addAllowedOriginPattern("*");
		configuration.setAllowCredentials(true);
		configuration.setMaxAge(5000L);

		return source;
	}

	public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
		@Override
		public void configure(HttpSecurity builder) throws Exception {
			AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

			JwtAuthenticationFilter jwtAuthenticationFilter =
				new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
			jwtAuthenticationFilter.setFilterProcessesUrl("/login");
			jwtAuthenticationFilter.setAuthenticationSuccessHandler(new UserAuthenticationSuccessHandler());
			jwtAuthenticationFilter.setAuthenticationFailureHandler(new UserAuthenticationFailureHandler());

			JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);

			builder
				.addFilter(jwtAuthenticationFilter)
				.addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
		}
	}
}
